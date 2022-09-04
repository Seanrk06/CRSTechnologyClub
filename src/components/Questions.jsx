import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What Will I Get Out of This Club?",
    answer:
      "By being a part of this club you will learn about careers in areas of STEM you may find interest in, have the opportunity to learn from and speak one on one with industry leaders, and be a part of hands on experiments and demonstrations.",
  },
  {
    question: "How Will I Stay Notified of Events and Meetings?",
    answer:
      "By checking the calender page on this website, following our Instagram and Remind linked in the footer, and by joining our email list from the homepage you will stay updated with all news."
  },
  {
    question: "Is Full Event Attendance Mandatory?",
    answer:
      "Nope. Attendance to one, many, or no events is completely up to you although if we ask you to come to a meeting we expect attendance."
  },
  {
    question: "Whats the Difference Between a Meeting and an Event?",
    answer:
    "Events involve a presenter, a demonstration, etc. while a meeting involves getting members together. An example of a meeting would be if we wanted to know your thoughts about our events and ways we could improve them although we will try to do these sorts of things through google forms sent by email."
  },
  {
    question: "What Leadership Opportunities Are There?",
    answer:
      "We have openings and will have openings in the future. If your active in the club we will definitely consider it in future appointments."
  },
  {
    question: "Why Should I Join the Newsletter and Remind Are They the Same Thing?",
    answer:
      "No. Although both are used for similar purposes joining both is highly recommended and by only joining one you will miss out on opportunities offered to those on both."
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Questions() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
