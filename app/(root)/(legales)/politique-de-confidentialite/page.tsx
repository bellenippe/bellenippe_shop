import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Belle Nippe",
  description: "Politique de confidentialité de la marque Belle Nippe.",
};

export default function Politique() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        Politique de confidentialité
      </h1>
      <div className="px-4 md:px-28 flex justify-center pt-8 font-figtree">
        <div className="flex-1 flex flex-col gap-[1rem] justify-center text-[0.8rem]">
          <p>
            {" "}
            Le but de cette Politique de Confidentialité est d&apos;informer les
            utilisateurs de notre site des données prsonnelles que nous
            recueillerons ainsi que les informations suivantes : <br /> - les
            données personnelles recueillies <br /> - l&apos;utilisation faite
            de ces données <br /> - les destinataires de ces données <br /> - la
            durée de conservation de ces données <br /> - les droits des
            utilisateurs concernant ces données <br /> - la politique du site en
            matière de cookies
          </p>

          <h2 className="font-bison text-[2rem]">Loi Applicable</h2>
          <p>
            Conformément au Règlement général sur la protection des données
            (RGPD), cette politique de confidentialité est conforme aux
            régleements suivant.
          </p>
          <p>
            Les données à caractère personnel doivent être : <br /> <br /> -
            traitées de manière licite, loyale et transparente au regard de la
            personne concernée (licéité, loyauté, transparence) ; <br /> <br />{" "}
            - collectées pour des finalités déterminées, explicites et
            légitimes, et ne pas être traotées ultérieurement d&apos;une manière
            incompatble avec ces finalités; le traitement ultérieur à des fin
            archivistiques dans l&apos;intérêt public, à des fins de recherche
            scientifique ou historique ou à des fins statistiques n&apos;est pas
            considéré, conformément à l&apos;article 89, paragraphe 1, comme
            incompatible avec les finalités initiales (limitation des finalités)
            ;<br /> <br /> - adéquates, pertinentes et limitées à ce qui est
            nécessare au regard des finalités pour lesquelles elles sont
            traitées (minimisation des données ;) <br /> <br /> - exactes et, si
            nécessaire, tenues à jour; toutes les mesures raisonnables doivent
            être prises pour que les données à caractère personnel qui sont
            inexactes, eu égard aux finalités pour lesquelles elles sont
            traitées, soient effacées ou rectifiées sans tarder (exactitude) ;{" "}
            <br /> <br />- conservées sous une forme permettant
            l&apos;identification des personnes concernées pendant une durée
            n&apos;excédant pas celle nécessaire au regard des finalités pour
            lesquelles elles sont traitées; les données à caractère personnel
            peuvent être conservées pour des durées plus longues dans la mesure
            où elles seront traitées exclusivement à des fins archivistiques
            dans l&apos;intérêt public, à des fins de recherche scientifique ou
            historique ou à des fins statistiques conformément à l&apos;article
            89, paragraphe 1, pour autant que soient mises en œuvre les mesures
            techniques et organisationnelles appropriées requises par le présent
            règlement en vue de garantir les droits et libertés de la personne
            concernée (limitation de la conservation) ; <br /> <br />- traitées
            de manière à garantir une sécurité appropriée des données à
            caractère personnel, y compris la protection contre le traitement
            non autorisé ou illicite et contre la perte, la destruction ou les
            dégâts d&apos;origine accidentelle, à l&apos;aide de mesures
            techniques ou organisationnelles appropriées (intégrité et
            confidentialité).
          </p>
          <p>
            Le traitement n&apos;est licite que si, et dans la mesure où, au
            moins une des conditions suivantes est remplie : <br />
            <br /> - la personne concernée a consenti au traitement de ses
            données à caractère personnel pour une ou plusieurs finalités
            spécifiques ; <br />
            <br /> - la traitement est nécessaire à l&apos;exécution d&apos;un
            contrat auquel la personne concernée est partie ou à
            l&apos;exécution de mesures précontractuelles prises à la demande de
            celle-ci ;
            <br />
            <br /> - le traitement est nécessaire au respect d&apos;une
            obligation légale à laquelle le responsable du traitement est soumis
            ; <br />
            <br /> - le traitement est nécessaire à la sauvegarde des intérêts
            vitaux de la personne concernée ou d&apos;une autre personne
            physique ; <br />
            <br /> - le traitement est nécessaire à l&apos;exécution d&apos;une
            mission d&apos;intérêt public ou relevant de l&apos;exercice de
            l&apos;autorité publique dont est investi le responsable du
            traitement ; <br />
            <br /> - le traitement est nécessaire aux fins des intérêts
            légitimes poursuivis par le responsable du traitement ou par un
            tiers, à moins que ne prévalent les intérêts ou les libertés et
            droits fondamentaux de la personne concernée qui exigent une
            protection des données à caractère personnel, notamment lorsque la
            personne concernée est un enfant.
            <br />
            <br /> - la durée de conservation de ces données <br />
            <br /> - les droits des utilisateurs concernant ces données <br />
            <br /> - la politique du site en matière de cookies.
          </p>
          <p>
            Pour les résidents de l&apos;Etat de Californie, cette politique de
            confidentialité vise à se conformer à la California Consumer Privacy
            Act (CCPA). S&apos;il y a des incohérences entre ce document et la
            CCPA, la législation de l&apos;Etat s&apos;appliquera. Si nous
            constatons des incohérences, nous modifierons notre politique pour
            nous conformer à la loi pertinente.
          </p>

          <h2 className="font-bison text-[2rem]">Consentement</h2>
          <p>
            Les utilisateurs conviennent qu&apos;en utilisantt notre site, ils
            consentent à :
            <br />
            <br /> - les conditions énoncées dans la présente politique de
            confidentialité
            <br />
            <br /> - la collecte, l&apos;utilisation et la conservation des
            données énoncées dans la présente politique de confidentialité
          </p>

          <h2 className="font-bison text-[2rem]">
            Données personnelles que nous collections
          </h2>
          <p>
            Données collectées automatiquement : Nous ne collections aucune
            donnée automatiquement sur notre site.
          </p>
          <p>
            Données recueillies de façon non automatique : Nous pouvons
            également collecter les donnéees suivantes lorsque vous effectuez
            certaines fonctions sur notre site : Nom, Prénom, Email, Adresse de
            livraison. Ces données peuvent être recueillies au moyen des
            méthodes suivantes : formulaire de contact, commandes. Ces données
            sont utilisées pour traiter et expédier vos commandes et vous
            fournir un service client efficace.
          </p>
          <p>
            Veuillez notez que nous ne collectons que les données qui nous
            aident à atteindre l&apos;obkectif énoncé dans cette politique de
            confidentialité. Nous ne recueillerons pas de données
            supplémentaires sans vous informer au préalable.
          </p>

          <h2 className="font-bison text-[2rem]">
            Avec qui nous partagerons les données personnelles
          </h2>
          <p>
            Employés : les informations de contact pourront être utilisé par les
            personnes en charge de vous répondre ou de vous contacter.
          </p>
          <p>
            Autres divulgations : Nous nous engageons à ne pas vendre ou
            partager vos données avec des tiers, sauf dans les cas suivants : si
            la loi l&apos;exige, si elle est requise pour toute procédure
            judiciaire, pou rprouver ou protéger nos droits légaux, à des
            acheteurs ou des acheteurs potentiels de cette société dans le cas
            où nous cherchons à la vendre.
          </p>
          <p>
            Si vous suivez des hyperliens de notre site vers un autre site,
            veuillez noter que nous ne sommes pas responsables et n&apos;avons
            pas de contrôle sur leurs politiques et pratiques de
            confidentialité.{" "}
          </p>

          <h2 className="font-bison text-[2rem]">
            Combien de temps nous stockons les données personnelles
          </h2>
          <p>
            Nous ne conservons pas les données des utilisateurs au-delà de ce
            qui est nécessaire pour atteindre les fins pour lesquelles elles
            sont recueillies.
          </p>

          <h2 className="font-bison text-[2rem]">
            Comment nous protégeons vos données personnelles
          </h2>
          <p>
            Nous prenons très au sérieux la sécurité de vos données personnelles
            et mettons en œuvre des mesures techniques et organisationnelles
            rigoureuses pour les protéger. Toutes les informations que vous nous
            fournissez sont stockées sur des serveurs sécurisés et sont
            protégées par des protocoles de sécurité avancés, tels que le
            cryptage SSL (Secure Socket Layer) pour garantir la confidentialité
            des données transmises. De plus, nous limitons l'accès à vos données
            personnelles aux seuls employés, agents, et partenaires qui ont
            besoin d'y accéder dans le cadre de leurs fonctions et qui sont
            tenus à une stricte obligation de confidentialité. Nous effectuons
            régulièrement des audits de sécurité et mettons à jour nos pratiques
            pour nous assurer que vos informations restent sécurisées. Enfin, en
            cas de suspicion de violation de la sécurité des données, nous avons
            mis en place des procédures pour gérer et minimiser l'impact de
            telles situations, y compris la notification rapide des utilisateurs
            concernés et des autorités compétentes si nécessaire.
          </p>
          <p>
            Alors que nous prenons toutes les précautions raisonnables pour nous
            assurer que nos données d&apos;utilisateur sont sécurisées et que
            les utilisateurs sont protégés, il reste toujours du risque de
            préjudice. L&apos;Internet en sa totalité peut être, parfois, peu
            sûr et donc nous sommes incapables de garantir la sécurité des
            données des utilisateurs au-delà de ce qui est raisonnablement
            pratique.
          </p>

          <h2 className="font-bison text-[2rem]">Mineurs</h2>
          <p>
            Le RGPD précise que les personnes de moins de 15 ans sont
            considérées comme des mineurs aux fins de la collecte de données.
            Les mineurs doivent avoir le consentement d&apos;un représentant
            légal pour que leurs données soient recueillies, traitées et
            utilisées.
          </p>

          <h2 className="font-bison text-[2rem]">
            Vos droits en tant qu&apos;utilisateur
          </h2>
          <p>
            En vertu du RGPD, les utilisateurs ont les droits suivant en tant
            que personnes concernées : <br /> - droit d&apos;accès <br /> -
            droit de rectification
            <br /> - droit à l&apos;effacement <br /> - droit de restreindre le
            traitement <br /> - droit à la portabilité des données <br /> -
            droit d&apos;objection{" "}
          </p>

          <h2 className="text-[2rem]">
            Comment modifier, supprimer ou contester les données recueillies
          </h2>
          <p>
            Si vous souhaitez que vos renseignements soient supprimés ou
            modifiés d&apos;une façon ou d&apos;une autre, veuillez communiquer
            avec notre agent de protection de la vie privée ici :{" "}
          </p>
          <p>Quentin Fontaine : - le mail de la personne</p>

          <h2 className="text-[2rem]">Modifications</h2>
          <p>
            Cette politique de confidentialité peut être modifiée à
            l&apos;occasion afin de maintenir la conformité avec la loi et de
            tenir compte de tout changement à notre processus de collecte de
            données. Nous recommandons à nos utilisateurs de vérifier notre
            politique de temps à autre pour s&apos;assurrer qu&apos;ils soient
            informés de toute mise à jour. Au besoin, nous pouvons informer les
            utlisateurs par courriel des changements apportés à cette politique.
          </p>
        </div>
      </div>
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}
