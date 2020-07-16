import React from "react";
import { t } from '@lingui/macro';

export default function Home() {
  return (
    <>
      <h1>{t`Home Page`}</h1>
      <p>{t`This is the home page.`}</p>
    </>
  );
}