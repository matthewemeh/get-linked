import Head from 'next/head';
import Image from 'next/image';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';

import axios from '../services/axios';
import endpoints from '../services/endpoints';

import { showAlert } from '../public/utils';

import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import FormInput from '../components/FormInput';
import StarGrey from '../components/stars/StarGrey';
import StarWhite from '../components/stars/StarWhite';
import StarPurple from '../components/stars/StarPurple';
import StarPurpleGradient from '../components/stars/StarPurpleGradient';

const Register = () => {
  const MAX_GROUP_SIZE = 10;
  const [categories, setCategories] = useState<Category[]>([]);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedGroupSize, setSelectedGroupSize] = useState<string>('');
  const groupSizes: string[] = Array.from(
    { length: MAX_GROUP_SIZE },
    (elm, index) => `${index + 1}`
  );

  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const teamNameRef = useRef<HTMLInputElement>(null);
  const projectTopicRef = useRef<HTMLInputElement>(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form: EventTarget & HTMLFormElement = e.currentTarget;

    const email: string = emailRef.current!.value;
    const team_name: string = teamNameRef.current!.value;
    const phone_number: string = phoneRef.current!.value;
    const privacy_poclicy_accepted: boolean = termsAccepted;
    const project_topic: string = projectTopicRef.current!.value;
    const group_size: number = selectedGroupSize ? Number(selectedGroupSize) : -1;
    const category: number = categories.find(({ name }) => name === selectedCategory)?.id ?? -1;

    const emailPattern: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (team_name.length === 0) {
      return showAlert({ msg: 'You have not entered a team name' });
    } else if (!emailPattern.test(email)) {
      return showAlert({ msg: 'Please enter a valid email address' });
    } else if (project_topic.length === 0) {
      return showAlert({ msg: 'You have not entered a project topic' });
    } else if (category < 0) {
      return showAlert({ msg: 'You have not selected a category' });
    } else if (group_size < 0) {
      return showAlert({ msg: 'You have not selected a group size' });
    } else if (!termsAccepted) {
      return showAlert({ msg: 'Kindly agree to our terms and conditions and privacy policy' });
    }

    const payload: RegisterPayload = {
      email,
      category,
      team_name,
      group_size,
      phone_number,
      project_topic,
      privacy_poclicy_accepted,
    };

    axios
      .post(endpoints.REGISTER, payload)
      .then((res: AxiosResponse) => {
        setShowModal(true);
        form.reset();
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          const errorData = err.response.data as object;
          const errors = Object.values(errorData) as string[][];

          if (errors.length > 0) {
            showAlert({ msg: errors[0][0] });
          } else {
            showAlert({ msg: 'An error has occured. Please try again' });
          }
        } else {
          showAlert({ msg: err.message });
        }
      });
  };

  const fetchCategories = () => {
    axios
      .get(endpoints.CATEGORIES)
      .then((res: AxiosResponse) => {
        const newCategories: Category[] = res.data;
        setCategories(newCategories);
      })
      .catch((err: AxiosError) => {
        showAlert({ msg: 'Could not fetch categories, please refresh and try again' });
      });
  };

  useEffect(fetchCategories, []);

  return (
    <>
      <Head>
        <title>Get Linked - Register</title>
      </Head>

      <main className='relative overflow-x-clip flex pr-[7.22vw] mb-[57px] phones:flex-col phones:px-[16vw] phones:pt-6'>
        <StarPurpleGradient left='8.9vw' top={235} extraClasses='phones:hidden' />
        <StarPurple width={23} height={28} top={734} left='41.4vw' extraClasses='phones:hidden' />
        <StarGrey top={203} right='21.67vw' extraClasses='phones:hidden' />
        <StarWhite width={10} height={12} top={924} right='14.17vw' extraClasses='phones:hidden' />
        <StarGrey top={844} left='9.65vw' extraClasses='phones:hidden' />

        {/* mobile view stars */}
        <StarPurpleGradient
          top={161}
          width={14}
          height={13}
          right='14.87vw'
          extraClasses='hidden phones:block'
        />
        <StarGrey
          top={400}
          width={14}
          height={18}
          left='7.23vw'
          extraClasses='hidden phones:block'
        />
        <StarPurple
          width={9}
          height={10}
          bottom={204}
          right='12.05vw'
          extraClasses='hidden phones:block'
        />

        <Image
          alt=''
          priority
          width={1037}
          height={948}
          src='/assets/pngs/purple-lens-flare-1.png'
          className='absolute -z-3 -top-[52px] -left-[258px] phones:hidden'
        />

        <Image
          alt=''
          priority
          width={1037}
          height={948}
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

        <h1 className='hidden font-clash-display text-[15px] font-bold text-heliotrope phones:block'>
          Register
        </h1>

        <div className='mt-[38px] w-[717px] h-[717px] phones:w-[195px] phones:h-[155px] phones:mx-auto'>
          <Image
            priority
            unoptimized
            width={717}
            height={717}
            alt='3d graphic designer showing thumbs up'
            src='/assets/pngs/3d-graphic-designer-showing-thumbs-up.png'
          />
        </div>

        <form
          onSubmit={submitForm}
          className='mt-[45px] rounded-xl bg-[rgba(255,255,255,0.03)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-[65px] px-[6.25vw] relative -ml-[1.53vw] min-w-[650px] phones:shadow-none phones:bg-transparent phones:p-0 phones:min-w-full'>
          <h1 className='text-heliotrope font-clash-display text-[32px] font-semibold phones:hidden'>
            Register
          </h1>

          <div className='mt-[46px] text-[14px] flex gap-x-[7px] phones:mt-[23px]'>
            <p className='phones:whitespace-nowrap'>Be part of this movement!</p>
            <div className='border-b border-dashed border-heliotrope w-[101px] h-[17px] relative before:absolute before:w-[26px] before:h-[26px] before:bg-[url(/assets/pngs/woman-walking.png)] before:bottom-0 before:left-[20%] after:absolute after:w-[30px] after:h-[30px] after:bg-[url(/assets/pngs/man-walking.png)] after:bottom-0 after:right-[25%]' />
          </div>
          <p className='mt-[19px] text-[24px] phones:mt-[7px] phones:whitespace-nowrap'>
            CREATE YOUR ACCOUNT
          </p>

          <div className='mt-[33px] grid grid-cols-2 gap-x-8 gap-y-[29px] phones:gap-x-[4.87vw] phones:grid-cols-[65%_33.33%] phones:mt-[23px] phones:gap-y-5'>
            <FormInput
              type='text'
              label="Team's Name"
              inputRef={teamNameRef}
              placeholder='Enter the name of your group'
              extraInputClasses='!py-[15px] !px-[25px] placeholder:!text-[rgba(255,255,255,0.25)]'
              extraLabelClasses='phones:col-start-1 phones:col-end-3'
            />

            <FormInput
              required
              type='tel'
              label='Phone'
              inputMode='tel'
              inputRef={phoneRef}
              placeholder='Enter your phone number'
              extraInputClasses='!py-[15px] !px-[25px] placeholder:!text-[rgba(255,255,255,0.25)]'
              extraLabelClasses='phones:col-start-1 phones:col-end-3'
            />

            <FormInput
              type='email'
              label='Email'
              inputMode='email'
              inputRef={emailRef}
              placeholder='Enter your email address'
              extraInputClasses='!py-[15px] !px-[25px] placeholder:!text-[rgba(255,255,255,0.25)]'
              extraLabelClasses='phones:col-start-1 phones:col-end-3'
            />

            <FormInput
              type='text'
              label='Project Topic'
              inputRef={projectTopicRef}
              placeholder='What is your group project topic'
              extraInputClasses='!py-[15px] !px-[25px] placeholder:!text-[rgba(255,255,255,0.25)]'
              extraLabelClasses='phones:col-start-1 phones:col-end-3'
            />

            <Dropdown
              setSelectedItem={setSelectedCategory}
              list={categories?.map(({ name }) => name) ?? []}
              selectedValue={selectedCategory || 'Select your category'}
              extraDropdownClasses="before:absolute before:content-['Category'] before:-top-8 before:left-0 phones:before:-top-7 medium-phones:col-start-1 medium-phones:col-end-3"
            />

            <Dropdown
              setSelectedItem={setSelectedGroupSize}
              selectedValue={selectedGroupSize || 'Select'}
              list={groupSizes?.map((size: string) => size) ?? []}
              extraDropdownClasses="before:absolute before:content-['Group_Size'] before:-top-8 before:left-0 phones:before:-top-7 medium-phones:col-start-1 medium-phones:col-end-3"
            />
          </div>

          <p className='mt-[23px] text-[12px] italic text-razzle-dazzle-rose phones:mt-[15px] phones:text-[10px]'>
            Please review your registration details before submitting
          </p>

          <label htmlFor='accept-terms' className='flex gap-x-2.5 mt-4 phones:mt-3'>
            <input
              type='checkbox'
              id='accept-terms'
              checked={termsAccepted}
              className='accent-heliotrope w-3.5 h-[14px]'
              onChange={e => setTermsAccepted(e.target.checked)}
            />
            <p className='text-[12px] phones:text-[10px]'>
              I agreed with the event terms and conditions and privacy policy
            </p>
          </label>

          <Button
            type='submit'
            title='Register Now'
            extraClasses='mt-[22px] w-full phones:mx-auto phones:!mt-[14px]'
          />
        </form>

        <div
          className={`fixed w-screen h-screen top-0 left-0 grid place-items-center z-[99999] overflow-y-auto ${
            showModal ? 'bg-[rgba(21,14,40,0.93)] visible' : 'bg-transparent invisible'
          }`}>
          <div
            className={`relative rounded-[5px] border border-heliotrope bg-[rgba(255,255,255,0.01)] w-[699px] h-[664px] after:absolute after:bg-[url(/assets/svgs/star-purple.svg)] after:w-[23px] after:h-7 after:bg-contain after:-right-[21px] after:-top-[22px] before:absolute before:bg-[url(/assets/svgs/star-grey.svg)] before:w-[23px] before:h-7 before:bg-contain before:left-[88px] before:top-[241px] duration-500 ease-in-out phones:w-[317px] phones:h-[467px] ${
              showModal ? 'scale-75' : 'scale-0'
            }`}>
            <div className='w-[305px] h-[305px] absolute left-[258px] top-[50px] z-1 phones:w-[184.924px] phones:h-[184.924px] phones:top-[27.08px] phones:left-[26.203vw]'>
              <Image
                priority
                width={305}
                height={305}
                alt='successful man'
                className='absolute'
                src='/assets/pngs/successful-man.png'
              />
            </div>

            <div className='w-[288px] h-[288px] absolute top-[34px] left-[136px] phones:w-[174.617px] phones:h-[174.617px] phones:top-[17.37px] phones:left-[7.44vw]'>
              <Image
                priority
                width={288}
                height={288}
                alt='check mark'
                src='/assets/pngs/successfully-done.png'
              />
            </div>

            <p className='text-[32px] font-semibold text-center mt-[355px] max-w-[80%] mx-auto phones:text-[16px] phones:mt-[238px]'>
              Congratulations <span className='block'> you have successfully Registered!</span>
            </p>

            <p className='max-w-[245px] text-[14px] font-semibold text-center mx-auto mt-2 relative after:absolute after:bg-contain after:bg-no-repeat after:w-5 after:h-5 after:bottom-0 after:-right-4 after:bg-[url(/assets/pngs/wink-emoji-woman.png)] phones:mt-[29px] phones:text-[12px] phones:font-medium phones:after:w-3.5 phones:after:h-3.5 phones:after:-right-4 phones:max-w-[202px]'>
              Yes, it was easy and you did it! check your mail box for next step
            </p>

            <Button
              title='Back'
              onClick={() => setShowModal(false)}
              extraClasses='w-[82%] mx-auto mt-[35px] relative after:absolute after:bg-[url(/assets/svgs/star-purple-gradient.svg)] after:w-[21px] after:h-[25px] after:-right-[24px] after:-bottom-12 phones:mt-4 phones:w-[85%] phones:!text-[16px] phones:!h-[53px]'
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default Register;
