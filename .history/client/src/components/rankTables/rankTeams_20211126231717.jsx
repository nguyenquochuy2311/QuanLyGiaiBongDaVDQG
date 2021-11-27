import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import card_team_data from '../../assets/fake-data/CardTeams';
import CardTeam from '../cards/cardTeam/cardTeam';
const RankTeam = ()=>{

    return (
            <div className="table">
                {
                    card_team_data.getSortCards(8).map((item, index)=>(
                        <CardTeam>
                            
                        </CardTeam>
                    ))
                }
            </div>
    );

}

export default RankTeam;