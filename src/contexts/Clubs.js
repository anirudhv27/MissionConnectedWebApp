import React, { useContext, useState, useEffect } from "react";
import { database } from "../firebase";
import { query, orderByChild } from "firebase/database";

export function getClubs() {
  const clubsRef = database.ref('schools/clubs').orderByChild('club_name');
  console.log("clubs ,,,,,,,,,,,,,,,,,,,,");
  console.log(clubsRef);
  return clubsRef;
}

