import styles from "./styles.module.scss";
import type { ContactsType } from "./types";
import { MailIcon, PhoneIcon, ClockIcon, MapPinIcon } from "lucide-react";

interface ContactsFooterProps {
  contacts: ContactsType;
}

export const ContactsFooter = ({ contacts }: ContactsFooterProps) => {
  return (
    <footer className={styles.contactsFooterContainer} id="contacts">
      <section className={styles.innerContactsFooter}>
        <h2 className={styles.innerContactsFooterTitle}>Contatos</h2>

        <div className={styles.contactsContentContainer}>
          <article className={styles.contactContentBox}>
            <MailIcon size={40} color="#fff" />

            <div className={styles.contactContentInfos}>
              <strong>E-mail</strong>
              <p>{contacts.email}</p>
            </div>
          </article>

          <article className={styles.contactContentBox}>
            <MapPinIcon size={40} color="#fff" />

            <div className={styles.contactContentInfos}>
              <strong>Endereço</strong>
              <p>{contacts.address}</p>
            </div>
          </article>

          <article className={styles.contactContentBox}>
            <PhoneIcon size={40} color="#fff" />

            <div className={styles.contactContentInfos}>
              <strong>Telefone</strong>
              <p>{contacts.phone}</p>
            </div>
          </article>

          <article className={styles.contactContentBox}>
            <ClockIcon size={40} color="#fff" />

            <div className={styles.contactContentInfos}>
              <strong>Horário de funcionamento</strong>
              <p>{contacts.time}</p>
            </div>
          </article>
        </div>
      </section>
    </footer>
  );
};
