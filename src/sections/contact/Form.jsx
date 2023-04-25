import React, { useLayoutEffect, useState } from "react";
import fetchData from "./fetchMail";
import Notice from "./Notice";

import { BsArrowRight } from "react-icons/bs";

const styles = {
  title: "text-2xl font-semibold dark:text-teal-100",
  boxInput: "w-full flex flex-col my-4",
  input:
    "outline-none bg-transparent border-b border-gray-500 text-teal-700 focus:border-teal-700 valid:border-teal-700",
  label: "text-slate-700 dark:text-white",
};

function Form() {
  const [formState, setFormState] = useState({});
  const [noticeData, setNoticeData] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  useLayoutEffect(() => {
    if (noticeData) setShowMessage(true);
  }, [noticeData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const onSubmit = setNoticeData({
      message: "Great, I'll find you back soon.",
      status: "good",
    });

    const onError = setNoticeData({
      message: "sorry, an error was occured try later.",
      status: "warn",
    });

    fetchData(formState, onSubmit, onError);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className={styles.boxInput}>
          <label className={styles.label} htmlFor="user-name">
            what&apos;s your name ?
          </label>
          <input
            type="text"
            name="username"
            className={styles.input}
            onChange={handleInputChange}
            required
            minLength={3}
          />
        </div>
        <div className={styles.boxInput}>
          <label className={styles.label} htmlFor="email">
            what&apos;s your fancy email ?
          </label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.boxInput}>
          <label className={styles.label} htmlFor="content">
            tell me about your project.
          </label>
          <textarea
            name="content"
            className={styles.input + " h-24 border rounded-md p-2 mt-2"}
            required
            onChange={handleInputChange}
            minLength={10}
          ></textarea>
        </div>
        <button className="text-teal-600 dark:text-teal-300 font-semibold">
          <span className="flex items-center gap-2 hover:gap-5 transition-all">
            submit <BsArrowRight />
          </span>
        </button>
      </form>

      <Notice
        visible={showMessage}
        onHidden={() => {
          setShowMessage(false);
        }}
        value={noticeData}
      />
    </>
  );
}

export default Form;
