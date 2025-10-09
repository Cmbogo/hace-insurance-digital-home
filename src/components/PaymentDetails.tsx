import React from 'react';
import { CreditCard, User } from 'lucide-react';

const PaymentDetails = () => {
  return (
    <div className="card-elegant p-6">
      <h3 className="text-xl font-bold text-heading mb-4 flex items-center">
        <CreditCard className="h-5 w-5 mr-2 text-primary" />
        Payment Details
      </h3>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <p className="font-medium text-sm text-muted-foreground">M-Pesa Paybill</p>
            <p className="text-2xl font-bold text-corporate">4118691</p>
          </div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="flex items-start space-x-3">
            <User className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium text-sm text-muted-foreground">Account Number</p>
              <p className="text-sm text-foreground">Use your full name as registered</p>
            </div>
          </div>
        </div>
        <div className="bg-muted/30 p-3 rounded-md mt-3">
          <p className="text-xs text-muted-foreground">
            For premium payments, use the Paybill number above and enter your full name as the account number.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
