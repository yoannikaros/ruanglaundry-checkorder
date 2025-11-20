export interface Order {
  createdAt: Date;
  customerAddress: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  deadline: Date;
  dpAmount: number | null;
  isPaid: boolean;
  notes: string | null;
  orderId: string;
  paymentType: string;
  price: number;
  quantity: number;
  serviceDetail: string;
  serviceType: string;
  status: string;
  updatedAt: Date;
  userId: string;
  weight: number;
}
