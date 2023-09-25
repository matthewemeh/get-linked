import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import axios from '../services/axios';
import endpoints from '../services/endpoints';

import Button from '../components/Button';
import Socials from '../components/Socials';
import FormInput from '../components/FormInput';
import StarGrey from '../components/stars/StarGrey';
import StarWhite from '../components/stars/StarWhite';
import StarPurple from '../components/stars/StarPurple';
import StarOutline from '../components/stars/StarOutline';
import StarPurpleGradient from '../components/stars/StarPurpleGradient';

import { showAlert } from '../public/utils';

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const goBackWindowHistory = () => {
    window.history.back();
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form: EventTarget & HTMLFormElement = e.currentTarget;

    const email: string = emailRef.current!.value;
    const message: string = messageRef.current!.value;
    const phone_number: string = phoneRef.current!.value;
    const first_name: string = firstNameRef.current!.value;

    const emailPattern: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailPattern.test(email)) {
      return showAlert({ msg: 'Please enter a valid email address' });
    } else if (first_name.length < 2) {
      return showAlert({ msg: 'Your first name should be up to two characters long' });
    } else if (message.length === 0) {
      return showAlert({ msg: 'You have not entered a message yet' });
    }

    const payload: ContactPayload = { email, first_name, message, phone_number };

    axios
      .post(endpoints.CONTACT, payload)
      .then((res: AxiosResponse) => {
        form.reset();
        showAlert({ msg: 'Message sent successfully' });
      })
      .catch((err: AxiosError) => {
        showAlert({ msg: err.message });
      });
  };

  return (
    <>
      <Head>
        <title>Get Linked - Contact Us</title>
      </Head>

      <main className='overflow-x-clip flex justify-between pl-[13.194vw] pr-[14.44vw] relative phones:px-[12.56vw] phones:pt-[111px] phones:pb-[36.44px]'>
        <StarPurpleGradient left='14.24vw' top={81} extraClasses='phones:hidden' />
        <StarOutline left='8.4vw' top={376} extraClasses='phones:hidden' />
        <StarOutline left='40.42vw' top={410} extraClasses='phones:hidden' />
        <StarGrey right='15.63vw' top={51} extraClasses='phones:hidden' />
        <StarPurple top={698} left='46.74vw' extraClasses='phones:hidden' />
        <StarWhite top={835} right='8.9vw' extraClasses='phones:hidden' />

        {/* mobile view stars */}
        <StarPurpleGradient
          top={67}
          width={11}
          height={13}
          left='46.15vw'
          extraClasses='hidden phones:block'
        />
        <StarGrey
          top={138}
          width={16}
          height={20}
          right='14.62vw'
          extraClasses='hidden phones:block'
        />
        <StarWhite
          width={12}
          height={14}
          bottom={210}
          right='6.923vw'
          extraClasses='hidden phones:block'
        />
        <StarPurple
          width={12}
          height={14}
          bottom={133}
          left='8.72vw'
          extraClasses='hidden phones:block'
        />

        <button
          onClick={goBackWindowHistory}
          className='bg-[url(/assets/svgs/back.svg)] w-[23px] h-[23px] bg-contain bg-no-repeat absolute top-[47px] left-[12.56vw] hidden phones:block'
        />

        <Image
          alt=''
          priority
          width={1086}
          height={836}
          src='/assets/pngs/purple-lens-flare-1.png'
          className='absolute -z-3 -top-[52px] -left-[258px] phones:hidden'
        />

        <Image
          alt=''
          priority
          width={1086}
          height={836}
          src='/assets/svgs/purple-lens-flare-2.svg'
          className='absolute -z-3 top-[288px] -right-[432px] phones:hidden'
        />

        <Image
          alt=''
          priority
          width={396}
          height={442}
          src='/assets/svgs/mobile-purple-lens-flare-11.svg'
          className='absolute -z-3 top-0 -left-[3px] w-screen hidden phones:block'
        />

        <div className='mt-[163px] text-[16px] font-normal w-[272px] phones:hidden'>
          <header className='text-heliotrope font-clash-display text-[32px] font-semibold'>
            Get in Touch
          </header>

          <p className='mt-[17px] max-w-[96px]'>Contact Information</p>

          <address className='not-italic mt-[17px] max-w-[119px]'>
            27,Alara Street Yaba 100012 Lagos State
          </address>

          <p className='mt-[21px]'>Call Us : 07067981819</p>

          <p className='mt-[22px] max-w-[272px]'>
            We are open from Monday-Friday 08:00am - 05:00pm
          </p>

          <div className='mt-[35px] text-heliotrope leading-[normal]'>
            <p>Share on</p>
            <Socials extraClasses='mt-3.5' />
          </div>
        </div>

        <form
          onSubmit={submitForm}
          className='w-[43vw] mt-[115px] pt-[75px] pb-[67px] px-[90px] rounded-xl bg-[rgba(255,255,255,0.03)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] phones:mt-0 phones:w-full phones:bg-transparent phones:shadow-none phones:p-0'>
          <h1 className='text-heliotrope font-clash-display text-[20px] font-semibold phones:max-w-[210px]'>
            Questions or need assistance?
            <span className='mt-[7px] block'>Let us know about it!</span>
          </h1>
          <p className='text-[12px] mt-6 max-w-[240px] hidden phones:block'>
            Email us below to any question related to our event
          </p>

          <FormInput
            type='text'
            inputRef={firstNameRef}
            placeholder='First Name'
            extraLabelClasses='phones:mt-[30px]'
            extraInputClasses='phones:px-6 phones:!mt-0'
          />

          <FormInput
            type='email'
            inputMode='email'
            placeholder='Email'
            inputRef={emailRef}
            extraInputClasses='phones:px-6 phones:!mt-0'
            extraLabelClasses='mt-[42px] phones:mt-[25px]'
          />

          <FormInput
            required
            type='tel'
            inputMode='tel'
            inputRef={phoneRef}
            placeholder='Phone Number'
            extraInputClasses='phones:px-6 phones:!mt-0'
            extraLabelClasses='mt-[42px] phones:mt-[25px]'
          />

          <textarea
            ref={messageRef}
            placeholder='Message'
            className='w-full h-[119px] rounded border text-[16px] font-normal bg-[rgba(255,255,255,0.03)] text-white placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] pt-[13px] pb-[14px] px-[15px] mt-[39px] outline-none phones:mt-[25px] phones:px-6 phones:pt-[27px] phones:h-[160px] phones:text-[13px]'
          />

          <Button title='Submit' type='submit' extraClasses='mt-[31px] mx-auto' />

          <div className='mt-[41px] text-heliotrope leading-[normal] hidden phones:flex flex-col items-center justify-center gap-y-[6px]'>
            <p className='text-[12px]'>Share on</p>

            <div className='flex items-center'>
              <Link
                href='/'
                className='w-[16.56px] h-[16.56px] bg-contain inline-block mr-[13.11px] bg-[url(/assets/svgs/instagram.svg)] bg-no-repeat'
              />
              <Link
                href='/'
                className='w-[13.09px] h-[11.73px] bg-contain inline-block mr-[11.04px] bg-[url(/assets/svgs/x.svg)] bg-no-repeat'
              />
              <Link
                href='/'
                className='w-[7.24px] h-[13.8px] bg-contain inline-block mr-[11.38px] bg-[url(/assets/svgs/facebook.svg)] bg-no-repeat'
              />
              <Link
                href='/'
                className='w-[16.56px] h-[16.56px] bg-contain inline-block bg-[url(/assets/svgs/linkedin.svg)] bg-no-repeat'
              />
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Contact;
