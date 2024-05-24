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
        (orders.length === 0 && (
          <p className="text-[1rem] font-figtree font-semibold tracking-widest text-noir-1">
            Aucune commande
          </p>
        ))}
      <div className="flex flex-wrap justify-between">
        {orders.map((order: OrderType) => (
          <div
            key={order._id}
            className="border-b-2 border-grey-3 py-5 w-[45%] font-figtree"
          >
            <h4 className="font-bold font-figtree">
              N° de commande : {order._id}
            </h4>
            <p>
              Total de la commande :{" "}
              <span className="font-bold">{order.totalAmount} €</span>
            </p>
            <p>
              Statut : <span className="font-bold">{order.statut}</span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {order.products.map((orderItem: OrderItemType) => (
                <div key={orderItem.product._id} className="flex justify-start">
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    height={100}
                    width={100}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex flex-col pl-4 justify-between font-figtree">
                    <p className="font-bold">{orderItem.product.title}</p>
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
