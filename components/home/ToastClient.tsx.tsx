"use client";

import { useEffect, useState } from "react";

type HomepageToastClientProps = {

  notifications: string[];

};

export default function HomepageToastClient({

  notifications,

}: HomepageToastClientProps) {

  const [toastVisible, setToastVisible] = useState(false);

  const [toastMessage, setToastMessage] = useState(notifications[0] ?? "");

  useEffect(() => {

    if (!notifications.length) {

      return;

    }

    let showTimeout: ReturnType<typeof setTimeout> | undefined;

    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    let cycleTimeout: ReturnType<typeof setTimeout> | undefined;

    const showNextToast = () => {

      const next =

        notifications[Math.floor(Math.random() * notifications.length)];

      setToastMessage(next);

      setToastVisible(true);

      hideTimeout = setTimeout(() => {

        setToastVisible(false);

      }, 6000);

      cycleTimeout = setTimeout(showNextToast, 24000);

    };

    showTimeout = setTimeout(showNextToast, 7000);

    return () => {

      if (showTimeout) clearTimeout(showTimeout);

      if (hideTimeout) clearTimeout(hideTimeout);

      if (cycleTimeout) clearTimeout(cycleTimeout);

    };

  }, [notifications]);

  if (!notifications.length) {

    return null;

  }

  return (

    <div className={`toast ${toastVisible ? "toast-visible" : "toast-hidden"}`}>

      <div className="toast-row">

        <div>

          <div className="toast-label">Recent activity</div>

          <div className="toast-message">{toastMessage}</div>

        </div>

        <button

          type="button"

          className="toast-close"

          aria-label="Close notification"

          onClick={() => setToastVisible(false)}

        >

          ×

        </button>

      </div>

    </div>

  );

}