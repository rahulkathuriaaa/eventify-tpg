import React from 'react';
import Alan from './logos/Alan';
import Arc from './logos/Arc';
import Cashapp from './logos/Cashapp';
import Descript from './logos/Descript';
import Loom from './logos/Loom';
import Mercury from './logos/Mercury';
import Opensea from './logos/Opensea';
import Pitch from './logos/Pitch';
import Ramp from './logos/Ramp';
import Raycast from './logos/Raycast';
import Retool from './logos/Retool';
import Vercel from './logos/Vercel';

export default function Clients() {
  return (
    <div className='client-div'>
      <p className='client-pr'>
      <span className="text-pr">
        Powering the world's best product teams.
      </span>
      <br className="hidden-pr" /> From next-gen startups to established
      enterprises.
      </p>
      
      <div className='client-container'>
        <Ramp />
        <Loom />
        <Vercel />
        <Descript />
        <Cashapp />
        <Raycast />
        <Mercury />
        <Retool />
        <Alan />
        <Arc />
        <Opensea />
        <Pitch />
      </div>
    </div>
  )
}
