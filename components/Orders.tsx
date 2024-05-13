import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const Orders = async () => {
  const { userId } = auth();

  const orders = await getOrders(userId as string);

  console.log(orders);

  return (
    <div className="px-10 py-5 max-sm:px-3">
      {!orders ||
        (orders.length === 0 && <p>Vous n'avez pas encore de commandes</p>)}
      <div>
        {orders.map((order: OrderType) => (
          <div key={order._id} className="border-b-2 border-gray-300 py-5">
            <p className="font-bold">Numéro de commande : {order._id}</p>
            <p>Total de la commande : {order.totalAmount} €</p>
            <div className="flex flex-col gap-4">
              {order.products.map((orderItem: OrderItemType) => (
                <div
                  key={orderItem.product._id}
                  className="flex justify-between"
                >
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    height={100}
                    width={100}
                    className="w-32 h-32 object-cover rounded-sm"
                  />
                  <div className="flex flex-col justify-between">
                    <p>{orderItem.product.title}</p>
                    <p>{orderItem.product.price} €</p>
                    <p>Couleur : {orderItem.color}</p>
                    <p>Taille : {orderItem.size}</p>
                    <p>Quantité : {orderItem.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
