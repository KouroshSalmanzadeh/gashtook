import React from 'react';
import Logo from "@/public/images/logo-white.svg";
import Image from 'next/image';
import ToggleBox from '@/components/Toggle-box/ToggleBox.component';
import NoDataSvg from '@/icons/NoDataSvg';


const notifications = [
  {
    id: 1,
    message: 'کاربر گرامی اشتراک شما رو به پایان است لورم.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    date: '۲۸ روز پیش',
  },
  {
    id: 2,
    message: 'به اطلاع شما می‌رساند گفتگو غیر اشتراکی شما لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    date: '۲۷ روز پیش',
  },
  {
    id: 3,
    message: 'تخفیف ویژه برای اشتراک سالانه فقط تا ۳ روز لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    date: '۲۵ روز پیش',
  },
  {
    id: 4,
    message: 'تخفیف ویژه برای اشتراک سالانه فقط تا ۳ روز لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    date: '۲۵ روز پیش',
  },
  // ... اعلان‌های بیشتر
];

export default function Page() {
  return (
    <div className="h-full text-right">
      <h1 className="text-xl font-bold mx-6 pb-4 border-b border-gray-200">اعلانات</h1>
      {notifications.length > 0 ? <ul className="h-full overflow-y-auto scroll px-6 pt-4 divide-y child:!mb-2 child:pb-2 divide-gray-100">
        {notifications.map((notification) => (
          <ToggleBox
            key={notification.id}
            className="flex gap-2 hover:bg-gray-100"
          >
            <div className='size-8 rounded-full bg-primary p-1.5 shrink-0'>
              <Image className="size-full" src={Logo} objectFit='contain' loading='lazy' alt="Gashtook" />
            </div>
            <div className='flex flex-col'>
              <p className="font-semibold">{notification.message}</p>
              <span className="text-gray-500 text-sm mt-2">{notification.date}</span>
            </div>
          </ToggleBox>
        ))}
      </ul> :
        <div className={"w-full h-full flex-center flex-col gap-4"}>
          <NoDataSvg className="max-w-48 h-48" />
          <p className="text-center text-gray-500">هیچ اعلانی یافت نشد</p>
        </div>
      }
    </div>
  );
}
