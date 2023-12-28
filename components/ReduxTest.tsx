"use client";
import {
  decrement,
  increment,
} from "@/app/store/features/counter/counterSlice";
import { RootState } from "@/app/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxTest = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex gap-4 items-center">
        <button
          className="bg-primary-blue text-white rounded-full mt-10 custom-btn-effect"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-primary-blue text-white rounded-full mt-10 custom-btn-effect"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      Commit first time
    </div>
  );
};

export default ReduxTest;
