import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livraison & retours | Belle Nippe",
  description:
    "Page d'information sur les conditions de livraison et de retour de la marque Belle Nippe.",
};

export default function CGV() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        Livraison & Retour
      </h1>
      <div className="px-4 md:px-28 flex justify-center pt-8 font-figtree">
        <div className="flex-1 flex flex-col gap-[1rem] justify-center text-[0.8rem]">
          <h2 className="text-[1.5rem]">1. Modes de Livraison</h2>
          <p>
            Nous proposons plusieurs modes de livraison pour répondre à vos
            besoins :
            <ul>
              <li>
                <strong>Livraison Standard :</strong> Livraison sous [nombre de
                jours] jours ouvrés.
              </li>
              <li>
                <strong>Livraison Express :</strong> Livraison sous [nombre de
                jours] jours ouvrés.
              </li>
            </ul>
          </p>

          <h2 className="text-[1.5rem]">2. Frais de Livraison</h2>
          <p>
            Les frais de livraison sont calculés en fonction du mode de
            livraison choisi et du montant total de la commande. Les frais de
            livraison sont indiqués au moment de la validation de la commande.
          </p>
          <h2 className="text-[1.5rem]">3. Délais de Livraison</h2>
          <p>
            Les délais de livraison indiqués sont des estimations et peuvent
            varier en fonction des disponibilités des produits et des
            contraintes logistiques. Nous faisons de notre mieux pour respecter
            les délais annoncés.
          </p>

          <h2 className="text-[1.5rem]">4. Suivi de Commande</h2>
          <p>
            Dès que votre commande est expédiée, vous recevrez un email de
            confirmation avec un numéro de suivi. Vous pourrez suivre l'état de
            votre livraison sur le site de notre partenaire logistique.
          </p>

          <h2 className="text-[1.5rem]">5. Problèmes de Livraison</h2>
          <p>
            Si vous rencontrez un problème avec la livraison de votre commande
            (retard, colis endommagé, etc.), veuillez contacter notre service
            client à l'adresse suivante : [Email de contact]. Nous nous
            engageons à trouver une solution rapide et satisfaisante.
          </p>

          <h2 className="text-[1.5rem]">6. Droit de Rétractation</h2>
          <p>
            Conformément à la législation en vigueur, vous disposez d'un délai
            de 14 jours à compter de la réception de votre commande pour exercer
            votre droit de rétractation sans avoir à justifier de motifs ni à
            payer de pénalités.
          </p>

          <h2 className="text-[1.5rem]">7. Procédure de Retour</h2>
          <p>
            Pour retourner un produit, veuillez suivre les étapes suivantes :
            <ol>
              <li>
                - Contactez notre service client à l'adresse suivante : [Email
                de contact] pour obtenir un numéro de retour.
              </li>
              <li>
                - Emballez soigneusement le produit dans son emballage
                d'origine, en parfait état, accompagné de la facture.
              </li>
              <li>
                - Envoyez le colis à l'adresse suivante : [Adresse de retour].
              </li>
            </ol>
          </p>
          <h2 className="text-[1.5rem]">8. Conditions de Retour</h2>
          <p>
            Les produits doivent être retournés dans leur état d'origine, non
            portés et non lavés, avec toutes les étiquettes attachées. Les
            articles retournés qui ne respectent pas ces conditions ne seront
            pas acceptés.
          </p>

          <h2 className="text-[1.5rem]">9. Frais de Retour</h2>
          <p>
            Les frais de retour sont à la charge du Client, sauf en cas de
            produit défectueux ou non conforme. Dans ce cas, le Vendeur prendra
            en charge les frais de retour.
          </p>

          <h2 className="text-[1.5rem]">10. Remboursements</h2>
          <p>
            Une fois le retour reçu et inspecté, nous vous enverrons un email
            pour vous notifier de la réception de votre article retourné. Nous
            vous informerons également de l'approbation ou du rejet de votre
            remboursement. Si votre retour est approuvé, votre remboursement
            sera traité, et un crédit sera automatiquement appliqué à votre
            carte de crédit ou à votre méthode de paiement initiale, dans un
            délai de [nombre de jours] jours.
          </p>

          <h2 className="text-[1.5rem]">11. Échanges</h2>
          <p>
            Si vous souhaitez échanger un produit (hors pièce unique), veuillez
            suivre la procédure de retour et indiquer que vous souhaitez un
            échange. Une fois votre retour reçu et approuvé, nous vous enverrons
            le produit de remplacement. Les frais de réexpédition pour les
            échanges sont à la charge du Client.
          </p>
        </div>
      </div>
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}
