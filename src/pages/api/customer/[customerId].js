import knexInstance from "@/lib/db";
import Customer from "@/db/models/Customer";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });

    return;
  }

  const { customerId } = req.query;

  const customer = await Customer.query(knexInstance)
    .select("*")
    .where("clients.id", customerId);
  
  res.status(200).json(customer);

  return;
}

export default handler;
