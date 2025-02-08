import { pgTable, serial, text, varchar, integer, boolean, json, pgEnum, index, timestamp, decimal } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm/sql";

const drivers = pgTable("drivers", {
    id: serial("id").primaryKey(),
    username: varchar("username").notNull(),
    password: text("password"),
    token: text("token"),
    reset_password_token: text("reset_password_token"),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    social_security_number: varchar("social_security_number").unique().notNull(),
    gender: varchar("gender").notNull(),
    age: integer("age").notNull(),
    profit: decimal("profit").default("0"),
    profile_picture: text("profile_picture"),
    geoLocation: json("geoLocation"),
    company_id: integer("company_id")
        .notNull()
        .references(() => companies.id),
    availability: boolean("availability").default(true),
    status: boolean("status").default(true),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
}, (drivers) => {
    return {
        drivers_company_id_idx: index("drivers_company_id_idx").on(drivers.company_id),
    };
});


const status_enum = pgEnum('status', ['CANCELED', 'PENDING', 'PICKUP', 'ON_DELIVERY', 'DELIVERED']);

const deliveries = pgTable("deliveries", {
    id: serial("id").primaryKey().notNull(),
    company_id: integer("company_id").notNull().references(() => companies.id),
    driver_id: integer("driver_id").notNull().references(() => drivers.id),
    items: varchar("items").array().notNull(),
    path: json("path").array(),
    status: status_enum("status").default('PENDING'),
    pickup_location: json("pickup_location"),
    dropoff_location: json("dropoff_location"),
    pickup_address: text("pickup_address").notNull(),
    dropoff_address: text("dropoff_address").notNull(),
    client_name: text("client_name"),
    client_phone: text("client_phone"),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
}, (deliveries) => {
    return {
        deliveries_status_idx: index("deliveries_status_idx").on(deliveries.status),
        deliveries_driver_idx: index("deliveries_driver_idx").on(deliveries.driver_id),
        deliveries_company_idx: index("deliveries_company_idx").on(deliveries.company_id),
    };
});

// Temporary companies schema
const companies = pgTable("companies", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    owner_name: text("owner_name").default("Owner").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    num_drivers: integer("num_drivers").default(0),
    local_address: text("local_address").notNull(),
    phone: text("phone").unique().notNull(),
    delivery_cost: integer("delivery_cost").notNull(),
    driver_cost: decimal("driver_cost").notNull(),
    billing_plan_id: integer("billing_plan_id").references(() => billing_plans.id),
    invoice_date: timestamp("invoice_date"),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
});

const moderators = pgTable("moderators", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    password: text("password").notNull(),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
    company_id: integer("company_id").notNull().references(() => companies.id),
});

const drivers_fcm_tokens = pgTable("drivers_fcm_tokens", {
    id: serial("id").primaryKey().notNull(),
    token: text("token").notNull(),
    driver_id: integer("driver_id").notNull().references(() => drivers.id),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
});

const companies_fcm_tokens = pgTable("companies_fcm_tokens", {
    id: serial("id").primaryKey().notNull(),
    token: text("token").notNull(),
    company_id: integer("company_id").notNull().references(() => companies.id),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
});

const invoices = pgTable("invoices", {
    id: serial("id").primaryKey().notNull(),
    company_id: integer("company_id").notNull().references(() => companies.id),
    amount: decimal("amount").notNull(),
    status: boolean("status").default(false),
    invoice_date: timestamp("invoice_date", { mode: "date" }).default(sql`now() + INTERVAL '7 days'`),
    due_date: timestamp("due_date"),
}, (invoices) => {
    return {
        invoices_company_id_idx: index("invoices_company_id_idx").on(invoices.company_id),
    };
});

const companies_payments = pgTable("companies_payments", {
    id: serial("id").primaryKey().notNull(),
    company_id: integer("company_id").notNull().references(() => companies.id),
    invoice_id: integer("invoice_id").notNull().references(() => invoices.id),
    checkout_id: varchar("checkout_id").notNull(),
    amount: decimal("amount").notNull(),
    payment_date: timestamp("payment_date", { mode: "date" }).default(sql`now()`),
}, (companies_payments) => {
    return {
        companies_payments_company_id_idx: index("companies_payments_company_id_idx").on(companies_payments.company_id),
    };
});

const billing_plans = pgTable("billing_plans", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    per_delivery_price: decimal("per_delivery_price").notNull(),
    billing_cycle: text("billing_cycle").notNull(),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
});

const vehicles = pgTable("vehicles", {
    id: serial("id").primaryKey().notNull(),
    company_id : integer("company_id").notNull().references(() => companies.id),
    driver_id: integer("driver_id").notNull().references(() => drivers.id),
    device_id: text("device_id").notNull(),
    type: text("type").notNull(),
    fuel_type: text("fuel_type").notNull(),
    fuel_capacity: decimal("fuel_capacity").notNull(),
    plate_number: text("plate_number").notNull(),
    max_capacity: decimal("max_capacity").notNull(),
    max_volume: decimal("max_volume").notNull(),
    cooling_type: text("cooling_type"),
    temperature_range: json("temperature_range"),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
});

const alerts = pgTable("alerts", {
    id: serial("id").primaryKey().notNull(),
    company_id: integer("company_id").notNull().references(() => companies.id),
    driver_id: integer("driver_id").references(() => drivers.id),
    delivery_id: integer("delivery_id").references(() => deliveries.id),
    message: text("message").notNull(),
    created_at: timestamp("created_at", { mode: "date" }).default(sql`now()`),
});

export {
    status_enum,
    companies,
    drivers,
    deliveries,
    moderators,
    drivers_fcm_tokens,
    invoices,
    companies_payments,
    billing_plans,
    vehicles,
    companies_fcm_tokens,
    alerts
}