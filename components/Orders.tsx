import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const Orders = async () => {
  const { userId } = auth();

  const orders = await getOrders(userId as string);

  return (
    <div className="px-10 py-5 max-sm:px-3">
      {!orders ||
        (orders.length === 0 && (
          <div className="w-full flex flex-col gap-4 justify-center items-center p-10 bg-noir-1">
            <p className="uppercase text-[1rem] font-figtree font-semibold tracking-widest text-white">
              Aucune commande
            </p>
            <Link
              href="/shop"
              className="w-[90%] md:w-[40%] px-8 py-4 text-noir-1 font-figtree font-bold tracking-widest uppercase text-center bg-grey-4 hover:bg-grey-3 hover:text-white transition-all ease-in-out"
            >
              Retour à la boutique
            </Link>
          </div>
        ))}
      <div className="flex flex-col gap-8 justify-center items-center md:flex-row">
        {orders.map((order: OrderType) => (
          <div
            key={order._id}
            className="w-full border-b-2 py-5 md:w-[45%] font-figtree bg-grey-4 bg-opacity-50 bg-grid-small-grey-2/[0.4] px-4"
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
