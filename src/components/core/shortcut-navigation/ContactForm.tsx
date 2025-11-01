/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

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
    'flex w-full flex-col gap-4 rounded bg-white p-4 border-2 ' +
    (hasError ? 'border-red-500' : 'border-transparent');
  return (
    <label htmlFor="" className={className}>
      <span className="font-bold">{label}</span>
      <input
        type="text"
        className="w-full border-0 p-2 outline-0"
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

type FormProps = {
  form: {
    firstname: {
      label: string;
      placeholder: string;
    };
    lastname: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    zipCode: {
      label: string;
      placeholder: string;
    };
    country: {
      label: string;
      placeholder: string;
    };
    notes: {
      label: string;
      placeholder: string;
    };
    button: {
      label: string;
      placeholder: string;
    };
  };
  children: React.ReactNode;
};
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ContactForm = (props: FormProps) => {
  const fields = props.form;
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    zipCode: '',
    country: '',
    notes: '',
  });
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    zipCode: false,
    country: false,
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
      zipCode: false,
      country: false,
      notes: false,
    };
    if (!form.firstname.trim()) newErrors.firstname = true;
    if (!form.lastname.trim()) newErrors.lastname = true;
    if (!emailRegex.test(form.email)) newErrors.email = true;
    if (!form.zipCode.trim()) newErrors.zipCode = true;
    if (!form.country.trim()) newErrors.country = true;
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
    const id = process.env.NODE_ENV === 'development' ? 'mrbkkjkv' : 'xjkrrzjj';
    fetch('https://formspree.io/f/' + id, {
      method: 'POST',
      body: JSON.stringify(form),
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
            zipCode: '',
            country: '',
            notes: '',
          });
          setErrors({
            firstname: false,
            lastname: false,
            email: false,
            zipCode: false,
            country: false,
            notes: false,
          });
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
      className="relative flex w-full flex-col gap-4 rounded-3xl bg-[#201d0d] p-4 md:rounded-none"
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
      <div className="flex gap-4">
        <Input
          value={form.firstname}
          hasError={errors.firstname}
          onChange={(v) => handleChange('firstname', v)}
          label={fields.firstname.label}
          placeholder={fields.firstname.placeholder}
        />
        <Input
          value={form.lastname}
          hasError={errors.lastname}
          onChange={(v) => handleChange('lastname', v)}
          label={fields.lastname.label}
          placeholder={fields.lastname.placeholder}
        />
      </div>
      <div className="flex gap-4">
        <Input
          value={form.email}
          hasError={errors.email}
          onChange={(v) => handleChange('email', v)}
          label={fields.email.label}
          placeholder={fields.email.placeholder}
        />
      </div>
      <div className="flex gap-4">
        <Input
          value={form.zipCode}
          hasError={errors.zipCode}
          onChange={(v) => handleChange('zipCode', v)}
          label={fields.zipCode.label}
          placeholder={fields.zipCode.placeholder}
        />
        <Input
          value={form.country}
          hasError={errors.country}
          onChange={(v) => handleChange('country', v)}
          label={fields.country.label}
          placeholder={fields.country.placeholder}
        />
      </div>
      <div className="flex gap-4">
        <Textarea
          value={form.notes}
          hasError={errors.notes}
          onChange={(v) => handleChange('notes', v)}
          label={fields.notes.label}
          placeholder={fields.notes.placeholder}
        />
      </div>
      {props.children}
      <div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 py-5 font-bold disabled:opacity-60"
          disabled={loading}
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {fields.button.label}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
