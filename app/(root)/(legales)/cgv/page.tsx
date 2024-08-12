import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV | Belle Nippe",
  description:
    "Page concernant les conditions générales de vente de Belle Nippe.",
};

export default function CGV() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        Conditions générales de vente
      </h1>
      <div className="px-4 md:px-28 flex justify-center pt-8 font-figtree">
        <div className="flex-1 flex flex-col gap-[1rem] justify-center text-[0.8rem]">
          <h2 className="text-[1.5rem]">1. Introduction</h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les
            relations contractuelles entre Belle Nippe, dont le siège
            social est situé à 3 rue de la chôlerie 45000 Orléans, immatriculée sous le
            numéro 83965653500011, ci-après dénommée "le Vendeur",
            et toute personne physique ou morale, ci-après dénommée "le Client",
            souhaitant procéder à un achat sur le site internet www.bellenippe.fr,
            ci-après dénommé "le Site".
          </p>

          <h2 className="text-[1.5rem]">2. Acceptation des conditions</h2>
          <p>
            En passant commande sur le Site, le Client accepte sans réserve les
            présentes CGV. Ces CGV prévaudront sur toutes autres conditions
            générales ou particulières non expressément agréées par le Vendeur.
          </p>
          <h2 className="text-[1.5rem]">3. Produits</h2>
          <p>
            Les produits proposés à la vente sont ceux figurant sur le Site,
            dans la limite des stocks disponibles. Le Vendeur se réserve le
            droit de modifier à tout moment l'assortiment de produits. Chaque
            produit est présenté sur le Site avec une description détaillée. Les
            photographies des produits sont les plus fidèles possibles mais ne
            peuvent assurer une similitude parfaite avec le produit offert,
            notamment en ce qui concerne les couleurs.
          </p>

          <h2 className="text-[1.5rem]">4. Commandes</h2>
          <p>
            Le Client passe commande sur le Site en suivant le processus en
            ligne. La commande ne peut être enregistrée sur le Site que si le
            Client s'est clairement identifié par l'entrée de ses coordonnées.
            La validation de la commande par le Client vaut acceptation des prix
            et descriptions des produits disponibles à la vente ainsi que des
            présentes CGV.
          </p>

          <h2 className="text-[1.5rem]">5. Prix</h2>
          <p>
            Les prix des produits sont indiqués en euros, toutes taxes comprises
            (TTC), hors frais de livraison qui seront précisés lors de la
            validation finale de la commande. Le Vendeur se réserve le droit de
            modifier ses prix à tout moment, étant entendu que le prix figurant
            sur le Site le jour de la commande sera le seul applicable au
            Client.
          </p>

          <h2 className="text-[1.5rem]">6. Paiement</h2>
          <p>
            Le paiement des achats s'effectue par carte bancaire, PayPal, ou
            tout autre moyen de paiement proposé sur le Site. Le paiement est
            sécurisé par un système de cryptage des données. Le montant total de
            la commande sera débité au moment de la validation de la commande.
          </p>

          <h2 className="text-[1.5rem]">7. Livraison</h2>
          <p>
            Les produits sont livrés à l'adresse de livraison indiquée par le
            Client lors de sa commande. Le Vendeur s'engage à expédier les
            produits dans les délais indiqués sur le Site. En cas de retard
            d'expédition, le Vendeur en informera le Client. Le Client dispose
            de la possibilité d'annuler sa commande en cas de retard de
            livraison de plus de 15 jours ouvrés. Le Vendeur remboursera alors
            le montant de la commande. Les frais de livraison sont à la charge
            du Client et varient en fonction du mode de livraison choisi et du
            montant de la commande.
          </p>

          <h2 className="text-[1.5rem]">8. Droit de rétractation</h2>
          <p>
            Conformément à la législation en vigueur, le Client dispose d'un
            délai de 14 jours à compter de la réception de sa commande pour
            exercer son droit de rétractation sans avoir à justifier de motifs
            ni à payer de pénalités. Le Client doit retourner les produits dans
            leur emballage d'origine, en parfait état, accompagnés de la
            facture. Les frais de retour sont à la charge du Client. Le Vendeur
            remboursera le montant de la commande, hors frais de livraison, dans
            un délai de 14 jours suivant la réception des produits retournés.
          </p>

          <h2 className="text-[1.5rem]">9. Retour et échange</h2>
          <p>
            En cas de produit défectueux ou non conforme, le Client peut
            demander un échange (hors pièce unique) ou un remboursement en
            contactant le service client du Vendeur dans un délai de 14 jours
            suivant la réception de la commande. Le produit devra être retourné
            dans son emballage d'origine, en parfait état. Les frais de retour
            seront pris en charge par le Vendeur en cas de produit défectueux ou
            non conforme.
          </p>

          <h2 className="text-[1.5rem]">10. Garantie</h2>
          <p>
            Tous les produits fournis par Belle Nippe bénéficient de la garantie
            légale de conformité et de la garantie contre les vices cachés,
            conformément aux dispositions légales en vigueur. En cas de
            non-conformité d'un produit vendu, il pourra être retourné, échangé
            ou remboursé.
          </p>

          <h2 className="text-[1.5rem]">11. Responsabilité</h2>
          <p>
            Le Vendeur, dans le processus de vente en ligne, n'est tenu que par
            une obligation de moyens. Sa responsabilité ne pourra être engagée
            pour un dommage résultant de l'utilisation du réseau Internet tel
            que perte de données, intrusion, virus, rupture du service, ou
            autres problèmes involontaires.
          </p>

          <h2 className="text-[1.5rem]">12. Propriété intellectuelle</h2>
          <p>
            Tous les éléments du Site sont et restent la propriété
            intellectuelle et exclusive du Vendeur. Personne n'est autorisé à
            reproduire, exploiter, rediffuser, ou utiliser à quelque titre que
            ce soit, même partiellement, des éléments du Site qu'ils soient
            logiciels, visuels ou sonores.
          </p>

          <h2 className="text-[1.5rem]">13. Données personnelles</h2>
          <p>
            Le Vendeur s'engage à préserver la confidentialité des informations
            fournies par le Client. Ces informations seront utilisées uniquement
            pour le traitement des commandes et pour améliorer la communication
            et les services proposés par le Site.
          </p>

          <h2 className="text-[1.5rem]">14. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises à la loi française. En cas de
            litige, une solution amiable sera recherchée avant toute action
            judiciaire. A défaut, les tribunaux français seront seuls
            compétents.
          </p>

          <h2 className="text-[1.5rem]">
            15. Modifications des conditions générales de vente
          </h2>
          <p>
            Le Vendeur se réserve le droit de modifier les présentes CGV à tout
            moment. Les CGV applicables sont celles en vigueur à la date de la
            commande passée par le Client.
          </p>

          <p>
            Pour toute question ou information, le service client est à la
            disposition du Client à l'adresse suivante : [Email de contact].
          </p>
        </div>
      </div>
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}
