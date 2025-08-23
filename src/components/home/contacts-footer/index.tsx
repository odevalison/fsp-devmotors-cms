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
            <MailIcon size={28} color="#fff" />

            <div>
              <strong>E-mail</strong>
              <p>{contacts.email}</p>
            </div>
          </article>

          <article className={styles.contactContentBox}>
            <MapPinIcon size={28} color="#fff" />

            <div>
              <strong>Endereço</strong>
              <p>{contacts.address}</p>
            </div>
          </article>

          <article className={styles.contactContentBox}>
            <PhoneIcon size={28} color="#fff" />

            <div>
              <strong>Telefone</strong>
              <p>{contacts.phone}</p>
            </div>
          </article>

          <article className={styles.contactContentBox}>
            <ClockIcon size={28} color="#fff" />

            <div>
              <strong>Horário de funcionamento</strong>
              <p>{contacts.time}</p>
            </div>
          </article>
        </div>
      </section>
    </footer>
  );
};
