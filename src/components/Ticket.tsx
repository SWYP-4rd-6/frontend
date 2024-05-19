import { GuideProductType } from '@/types/common';
import { formatDate, formatTimeRange, getTagName, getTagNameKor } from '@/utils';
import { MaterialSymbol } from 'react-material-symbols';

type PropsType = {
  src?: string;
  content: GuideProductType;
};

const TICKET_SET = [
  {
    top: '/ticket_top_blue.png',
    bottom: '/ticket_bottom_blue.png',
  },
  {
    top: '/ticket_top_green.png',
    bottom: '/ticket_bottom_green.png',
  },
  {
    top: '/ticket_top_pink.png',
    bottom: '/ticket_bottom_pink.png',
  },
  {
    top: '/ticket_top_yellow.png',
    bottom: '/ticket_bottom_yellow.png',
  },
  {
    top: '/ticket_top_red.png',
    bottom: '/ticket_bottom_red.png',
  },
];

const randomTicket = () => {
  const random = Math.floor(Math.random() * TICKET_SET.length);
  return TICKET_SET[random];
};

const Ticket = ({ src, content }: PropsType) => {
  const ticket = randomTicket();
  return (
    <div>
      <div className="relative text-white">
        <img
          src={ticket.top}
          alt="Background"
          className="size-full relative inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
        <div className="absolute top-[4.5rem] left-8">
          <div className="text-4xl font-black  py-2">{content.title}</div>
          {content.categories?.map((item, index) => (
            <span key={index} className="text-sm  font-light">
              #{getTagNameKor(item)}
            </span>
          ))}
        </div>
        <div className="absolute bottom-14 left-8 grid grid-cols-2 grid-rows-1 gap-x-10 gap-y-3 ">
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center  py-1.5">
              <MaterialSymbol
                icon="fmd_good"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Location
            </p>
            <p className="text-base font-black">{content.locationName}</p>
          </div>
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center  py-1.5">
              {' '}
              <MaterialSymbol
                icon="person"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Host
            </p>
            <p className="text-base font-black">{content.nickname}</p>
          </div>{' '}
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center py-1.5">
              {' '}
              <MaterialSymbol
                icon="schedule"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Time
            </p>
            <p className="text-base font-black">
              {' '}
              {formatTimeRange(content.guideStart, content.guideEnd)}
            </p>
          </div>{' '}
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center  py-1.5">
              {' '}
              <MaterialSymbol
                icon="date_range"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Date
            </p>
            <p className="text-base font-black"> {formatDate(content.guideStart)}</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={ticket.bottom} alt="Background" className="size-full " />
        <div className="absolute inset-0 flex items-center justify-center font-extrabold font-poppins text-[1.05rem] rotate-[-10deg;] transform bottom-6 -left-2 text-white ">
          Nice To Matthew
        </div>
      </div>
    </div>
  );
};

export default Ticket;
