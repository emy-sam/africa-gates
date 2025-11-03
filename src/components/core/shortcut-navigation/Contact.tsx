import { getFixedT } from 'i18next';
import ContactForm from './ContactForm';
import Image from "next/image";

// Define a specific type for form fields
type Fields =
  | 'firstname'
  | 'lastname'
  | 'email'
  | 'zipCode'
  | 'country'
  | 'notes'
  | 'button';

const Contact = ({ locale }: { locale: string }) => {
  const t = getFixedT(locale, 'common');
  const fields: Fields[] = [
    'firstname',
    'lastname',
    'email',
    'zipCode',
    'country',
    'notes',
    'button',
  ];
  const form = fields.reduce(
    (acc, v) => {
      acc[v] = {
        label: t(`contact.${v}.label`),
        placeholder: t(`contact.${v}.placeholder`),
      };
      return acc;
    },
    {} as Record<Fields, { label: string; placeholder: string }>
  );

  return (
    <div className="flex">
      <div className="hidden w-1/2 flex-col md:flex">
        <div className="h-max bg-yellow-300 p-10 text-lg font-bold">
          {t('contact.title')}
        </div>
        <div className="h-full">
          <Image
            src="/home/aaaa.jpg "
            alt=""
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="w-full flex-col bg-[#201d0d] md:w-1/2">
        <div className="h-max bg-yellow-300 p-10 text-lg font-bold md:hidden">
          {t('contact.title')}
        </div>
        <div className="relative p-5 sm:p-20 md:px-0">
          <div className="absolute inset-0 block h-full md:hidden">
            <Image
              src="https://cdn1-originals.webdamdb.com/12938_155838876?cache=1706608933&response-content-disposition=inline;filename=Contact_Form_Bauma_960x960px.webp&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9jZG4xLW9yaWdpbmFscy53ZWJkYW1kYi5jb20vMTI5MzhfMTU1ODM4ODc2P2NhY2hlPTE3MDY2MDg5MzMmcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmU7ZmlsZW5hbWU9Q29udGFjdF9Gb3JtX0JhdW1hXzk2MHg5NjBweC53ZWJwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ3NDE0NDAwfX19XX0_&Signature=owfMh024KL0ppW9cj9MyTUCPeY6cJ0WeJocSImuCmd~s1o90-K44IPL5vh4srPcFKufgKsH7zDZkBsUaViQPQ0sKpH-QzyzYxMSuIZ5GYuRNkn~4kFs1ThM86C1jMAlF-XDocnbigkoFVN6mbEpcP-FSjLyMuS15de9S9dWkQ0StOafYSoVwJlCWqz48lva17FcW8JZG-flNG2ES~esMoYyl5bD9OyvY8N~2FXNPkXa~o~-THWmi~9HI43QlRvDFZ0n8C2YOiiiIthTukFo0LsrNIagBylkfGp7ndVc8Aone3XVk~YDbfwoyk6HQ-eIWs~hWDA94ywnWTGsOQRU37Q__&Key-Pair-Id=APKAI2ASI2IOLRFF2RHA"
              alt=""
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <ContactForm form={form}>
            <p className="py-10 text-white">{t('contact.policy')}</p>
          </ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
