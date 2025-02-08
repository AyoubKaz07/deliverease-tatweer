import sendNotification from "../firebase/sendNotification";
import { DriverService } from "services/driverService";
import { CompanyService } from "services/companyService";
import { AlertService } from "services/alertsService";
import { DeliveryService } from "services/deliveryService";
import { sendEmail } from "../backend/lib/mail/nodeMailer";

export async function notifyCompanyOfDriver(driverId: string, message: {title: string, body: string}, location?: any) {
    const companyId = await DriverService.getCompanyByDriverId(driverId);
    const deliveryId = await DeliveryService.getDeliveriesByDriver(driverId);
    const tokens = await CompanyService.getCompanyTokens(companyId);
    // Send notification to the company
    if (tokens.length > 0) {
        sendNotification(tokens, message);
    }

    // Insert Alert in the database
    const alert = {
        message: message.body,
        driver_id: driverId,
        company_id: companyId,
        delivery_id: deliveryId,
    }
    await AlertService.addAlert(alert);


    // Send email to the company
    const companyEmail = await CompanyService.getCompanyEmail(companyId);
    await sendEmail(companyEmail, message.title, message.body);
}