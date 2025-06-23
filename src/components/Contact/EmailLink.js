import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const validateText = (text) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = ['inquire', 'hello', 'contact', 'hi', 'info'];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 50;
  const delay = 150;
  const [idx, setIdx] = useState(0);
  const [message, setMessage] = useState(messages[0]);
  const [char, setChar] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [copied, setCopied] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (char === 0 && idx > 0) {
      setOpacity(0);
      setTimeout(() => {
        setOpacity(1);
      }, 200);
    }
  }, [char, idx]);

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;

      if (char - hold >= messages[idx].length) {
        newIdx = idx + 1;
        newChar = 0;
      }

      if (newIdx >= messages.length) {
        if (loopMessage) {
          newIdx = 0;
          newChar = 0;
        } else {
          setIsActive(false);
          return;
        }
      }

      if (newIdx < messages.length) {
        setMessage(messages[newIdx].slice(0, newChar));
        setIdx(newIdx);
        setChar(newChar + 1);
      }
    },
    isActive ? delay : null,
  );

  const handleCopy = () => {
    navigator.clipboard.writeText('sachinscnpdl@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="inline-flex items-center text-xl font-mono">
      <a
        href={`mailto:sachinscnpdl@gmail.com`}
        className="px-4 py-2 bg-white/70 text-gray-800 rounded-l-xl hover:bg-gray-200 transition-colors duration-300"
        style={{ opacity }}
      >
        {message}<span className="animate-blink">|</span>@gmail.com
      </a>
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-teal-500 text-white rounded-r-xl hover:bg-teal-600 transition-all duration-300 relative overflow-hidden"
        aria-label="Copy email to clipboard"
      >
        {copied ? 'Copied!' : 'COPY'}
        <span className="absolute inset-0 bg-white/20 animate-ripple"></span>
      </button>
      {copied && (
        <span className="ml-2 text-teal-300 text-sm animate-fadeIn">Copied to clipboard!</span>
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-blink { animation: blink 1s infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-ripple { animation: ripple 0.6s ease-out; }
      `}</style>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;