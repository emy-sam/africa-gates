/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Input = ({
  value,
  label,
  placeholder,
  hasError,
  onChange,
}: {
  value: string;
  label: string;
  placeholder: string;
  hasError: boolean;
  onChange: (value: string) => void;
}) => {
  const className =
    'flex w-full flex-col gap-1 rounded bg-white p-1 border-2 ' +
    (hasError ? 'border-red-500' : 'border-transparent');
  return (
    <label htmlFor="" className={className}>
      <span className="font-bold">{label}</span>
      <input
        type="text"
        className="w-full border-0 p-1 outline-0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
const Textarea = ({
  value,
  label,
  placeholder,
  hasError,
  onChange,
}: {
  value: string;
  label: string;
  placeholder: string;
  hasError: boolean;
  onChange: (value: string) => void;
}) => {
  const className =
    'flex w-full flex-col gap-4 rounded bg-white p-4 border-2 ' +
    (hasError ? 'border-red-500' : 'border-transparent');
  return (
    <label htmlFor="" className={className}>
      <span className="font-bold">{label}</span>
      <textarea
        className="w-full border-0 p-2 outline-0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OrderForm = ({
  spare,
  close,
}: {
  spare: { id: string; title: string };
  close: () => void;
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    notes: false,
  });
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const timer = useRef<NodeJS.Timeout>(null);

  const triggerAlert = (type: string, message: string) => {
    setAlert({ type, message });
    setShowAlert(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setShowAlert(false);
    }, 3000); // auto-hide after 3 seconds
  };

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });

    let isValid = true;

    // Inline field validation
    if (!value.trim()) {
      isValid = false;
    } else if (name === 'email' && !emailRegex.test(value)) {
      isValid = false;
    }

    setErrors({ ...errors, [name]: !isValid });
  };
  const validate = () => {
    const newErrors = {
      firstname: false,
      lastname: false,
      email: false,
      phone: false,
      notes: false,
    };
    if (!form.firstname.trim()) newErrors.firstname = true;
    if (!form.lastname.trim()) newErrors.lastname = true;
    if (!emailRegex.test(form.email)) newErrors.email = true;
    if (!form.phone.trim()) newErrors.phone = true;
    if (!form.notes.trim()) newErrors.notes = true;
    return newErrors;
  };
  const submit = (e: any) => {
    e.preventDefault();
    const newErrors = validate();
    console.log(Object.values(newErrors));
    if (Object.values(newErrors).some((err) => err)) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    const id = process.env.NODE_ENV === 'development' ? 'mldnnvwy' : 'xovwlnya';
    fetch('https://formspree.io/f/' + id, {
      method: 'POST',
      body: JSON.stringify({ ...form, ID: spare.id, title: spare.title }),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          triggerAlert('success', 'Thanks for your submission!');
          setForm({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            notes: '',
          });
          setErrors({
            firstname: false,
            lastname: false,
            email: false,
            phone: false,
            notes: false,
          });
          close();
        } else {
          response.json().then((data) => {
            if ('errors' in data) {
              triggerAlert(
                'error',
                data['errors'].map((error: any) => error['message']).join(', ')
              );
            } else {
              triggerAlert(
                'error',
                'Oops! There was a problem submitting your form'
              );
            }
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        triggerAlert('error', 'Oops! There was a problem submitting your form');
      });

    return;
  };
  return (
    <form
      onSubmit={submit}
      className="relative flex max-h-[calc(100vh-100px)] w-full flex-col gap-2 overflow-auto rounded-3xl bg-[#201d0d] px-4 md:rounded-none"
    >
      {alert.message && (
        <div
          className={`fixed right-4 top-4 z-50 rounded px-4 py-2 shadow-lg transition-opacity duration-300 ${
            showAlert ? 'opacity-100' : 'pointer-events-none opacity-0'
          } ${alert.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
        >
          {alert.message}
        </div>
      )}
      <div className="flex gap-2">
        <Input
          value={form.firstname}
          hasError={errors.firstname}
          onChange={(v) => handleChange('firstname', v)}
          label={t(`contact.firstname.label`)}
          placeholder={t(`contact.firstname.placeholder`)}
        />
        <Input
          value={form.lastname}
          hasError={errors.lastname}
          onChange={(v) => handleChange('lastname', v)}
          label={t(`contact.lastname.label`)}
          placeholder={t(`contact.lastname.placeholder`)}
        />
      </div>
      <div className="flex gap-4">
        <Input
          value={form.email}
          hasError={errors.email}
          onChange={(v) => handleChange('email', v)}
          label={t(`contact.email.label`)}
          placeholder={t(`contact.email.placeholder`)}
        />
      </div>
      <div className="flex gap-4">
        <Input
          value={form.phone}
          hasError={errors.phone}
          onChange={(v) => handleChange('phone', v)}
          label={t(`contact.phone.label`)}
          placeholder={t(`contact.phone.placeholder`)}
        />
      </div>
      <div className="flex gap-4">
        <Textarea
          value={form.notes}
          hasError={errors.notes}
          onChange={(v) => handleChange('notes', v)}
          label={t(`contact.notes.label`)}
          placeholder={t(`contact.notes.placeholder`)}
        />
      </div>
      <p className="text-xs text-white">{t(`contact.policy`)}</p>
      <div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 py-5 font-bold disabled:opacity-60"
          disabled={loading}
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {t(`contact.order`)}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
