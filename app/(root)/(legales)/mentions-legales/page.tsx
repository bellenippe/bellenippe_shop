import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Belle Nippe",
  description: "Mentions légales du site de la marque Belle Nippe.",
};

export default function MentionsLegales() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        Mentions Légales
      </h1>
      <div className="px-4 md:px-28 flex justify-center pt-8 font-figtree">
        <div className="flex-1 flex flex-col gap-[1rem] justify-center text-[0.8rem]">
          <h2 className="font-bison text-[2rem]">Propriétaire du site</h2>
          <p>Nom du propriétaire du site : Quentin Fontaine</p>
          <p>Adresse postale : 3 rue de la chôlerie, 45000 Orléans</p>
          <p>Adresse mail: bellenippe@gmail.com</p>
          <p>Numéro de téléphone : 0666750812</p>

          <h3 className="font-bold">Hébergeur du site :</h3>
          <p>Nom de l&apos;hébergeur : Vercel</p>
          <p>Adresse : San Francisco</p>
          <p>Coordonnées : https://www.vercel.com</p>

          <h2 className="text-[2rem]">Propriété intellectuelle</h2>
          <p>
            La structure générale ainsi que les textes, sons, son savoir-faire
            et tous les autres éléments composant le site sont la proproété
            exclusive de www.bellenippe.fr
          </p>
          <p>
            Les logos et marques des sociétés citées sur le site bellenippe.fr
            sont la propriété exclusive de leurs auteurs respectifs. Toutes
            représentations et/ou reproductions et/ou exploitation partielle ou
            totale de ce site, par quelques procédés que ce soit, sans
            l&apos;autorisation expresse et préalable de bellenippe.fr est
            interdite et constituerait une contrefaçon au sens des articles L
            335-2 et suivants du Code de la propriété intellectuelle.
          </p>
          <p>
            L&apos;élaboration de liens hypertextes profonds vers le site
            bellenippe.fr est interdite sans l&apos;accord exprès et préalable
            de bellenippe.fr. Par ailleurs, l&apos;utilisation des informations
            contenues sur le site relève de la seule responsabilité de
            l&apos;utilisateur. Nous ne pourrions en aucun cas, et pour quelque
            cause que ce soit, en être tenus pour responsables, et ce, quelque
            en soit les conséquences. Nous ne sommes responsables d&apos;aucune
            erreur ou omission sur le présent site.
          </p>
          <p>
            Les photos et les illustrations utilisées sur le site bellenippe.fr
            sont la propriété de leurs auteurs respectifs. Toute reproduction
            totale ou partielle de ces éléments sans l&apos;autorisation
            expresse de leurs auteurs est interdite.
          </p>

          <h2 className="text-[2rem]">Avertissement Général</h2>
          <p>
            La consultation du site bellenippe.fr est proposée aux internautes à
            titre gratuit et sans aucune garantie de la part de son éditeur. Les
            informations disponibles sur ce site qui proviendrait de sources
            extérieures ne saurait garantir qu&apos;elles sont exemptes
            d&apos;erreurs, ni garantir leur complétude, leur actualité, leur
            exhaustivité ou autre.
          </p>
          <p>
            Les propriétaires des sites marchands, de services, sites persos,
            site informatiques (etc.) consultés à partir du site bellenippe.fr
            sont seuls responsables du respect par eux de l&apos;ensemble des
            réglementations s&apos;appliquant dans le cadre des prestations
            offertes aux clients finaux, et notamment, des lois et réglements
            relatif à : la vente à distance, la protection du consommateur, la
            publicité mensongère ou trompeuse, les prix, la conformité des
            produits.
          </p>

          <h2 className="text-[2rem]">Crédit & Copyright</h2>
          <p>
            Les crédits et copyright des visuels et des photos présents sur le
            blog bellenippe.fr sont signalés lorsqu&apos;elles proviennent
            d&apos;un professionnel avec son accord.
          </p>
        </div>
      </div>
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}
