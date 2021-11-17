import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { DateTime } from "luxon";

export default function DatePicker({ date, handleDateChange }) {
  return (
    <div className="my-12">
      <Listbox>
        <Listbox.Label className="block text-sm font-medium text-gray-700">
          Date
        </Listbox.Label>
        <div className="mt-1 relative">
          <input
            type="date"
            max={DateTime.now().toFormat("yyyy-MM-dd")}
            className="
              block
              w-full
              truncate
              bg-white
              border
              border-gray-300
              rounded-md
              shadow-sm
              focus:outline-none
              focus:ring-1
              focus:ring-indigo-500
              focus:border-indigo-500
              "
            onChange={(e) => handleDateChange(e.target.value)}
            value={date}
          />
        </div>
      </Listbox>
    </div>
  );
}
