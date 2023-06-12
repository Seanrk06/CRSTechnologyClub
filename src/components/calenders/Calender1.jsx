/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {monthData1} from "../../data/monthdata"

const months = monthData1

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calender() {
  return (
    <div className='pt-20 bg-gray-50'>
      <div className="relative grid grid-cols-1 gap-x-14 md:grid-cols-2">
      <form action='/calender1'>
          <button
            type="submit"
            className="absolute -top-1 -left-1.5 flex items-center justify-center p-1.5 text-black hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>
        <form action='/calender2'>
          <button
            type="submit"
            className="absolute -top-1 -right-1.5 flex items-center justify-center p-1.5 text-black hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>
        
        {months.map((month, monthIdx) => (
          <section
            key={monthIdx}
            className={classNames(monthIdx === months.length && 'hidden md:block', 'text-center')}
          >
            <h2 className="font-semibold text-gray-900">{month.name}</h2>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
              {month.days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                    dayIdx === 0 && 'rounded-tl-lg',
                    dayIdx === 6 && 'rounded-tr-lg',
                    dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                    dayIdx === month.days.length - 1 && 'rounded-br-lg',
                    'relative py-1.5 hover:bg-gray-100 focus:z-10'
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.eventScheduled && 'bg-blue-900 font-semibold text-white',
                      'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
                    )}
                  >
                    {day.date.split('-').pop().replace(/^0/, '')}
                  </time>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="font-semibold text-gray-900">Upcoming events</h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-17" className="w-28 flex-none">
              Thursday, September 22
            </time>
            <p className="mt-2 flex-auto sm:mt-0">To be decided</p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-17" className="w-28 flex-none">
              Thursday, October 13
            </time>
            <p className="mt-2 flex-auto sm:mt-0">To be decided</p>
          </li>
        </ol>
      </section>
    </div>
  )
}
