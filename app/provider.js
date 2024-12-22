"use client";

import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { React, useEffect } from "react";
import { db } from "../configs/db";
import { USER_TABLE } from "../configs/schema";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user&&CheckIsNewUser();
  }, [user]);

  const CheckIsNewUser = async () => {
    //! Check user is existing
    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result);

    if (result?.length == 0) {
      //! If user is new then add the user to the database
      const userResp = await db.insert(USER_TABLE).values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        }).returning({id:USER_TABLE.id});

      console.log(userResp);
    }

    //! If user is new then show the onboarding screen to the user
  };

  return <div>{children}</div>;
}

export default Provider;
