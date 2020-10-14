
import React, { memo, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { setUsers } from 'actions/user';
import { isEmpty } from 'utils/utility';
import { Typography } from '@material-ui/core';
import CustomDivider from 'components/UI/CustomDivider';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    width: '100%'
  },
  grid: {
    margin: 0,
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.custom.palette.hover,
    borderRadius: theme.spacing(1)
  },
  agent: {
    color: theme.custom.palette.red,
    padding: theme.spacing(1)
  },
  contact: {
    padding: theme.spacing(1)
  }
}));


// TODO: update getDistanceFunction
const getNearAgent = ({ contact, agents }) => {
  let minLength = 0;
  let nearAgent = {};

  for (const agent of agents) {
    const length = Math.abs(contact.zipCode - agent.zipCode)
    if (!minLength || length < minLength) {
      minLength = length;
      nearAgent = agent;
    }
  }

  return nearAgent;
}
const AgentContact = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { contacts = [], agents = [] } = useSelector(state => state.user, {});

  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch])

  const agentContacts = useMemo(() => {
    if (!isEmpty(contacts) && !isEmpty(agents)) {
      let items = []
      for (const contact of contacts) {
        const nearAgent = getNearAgent({ contact, agents });
        items = [
          ...items,
          {
            agent: nearAgent,
            contact
          }
        ]
      }
      return items
    }
    return []
  }, [contacts, agents])
  
  return (
    <Grid container spacing={2} className={classes.root}>
      {
        agents.map((agent, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} className={classes.grid}>
            <div className={classes.container}>
              <Typography variant='h5' className={classes.agent}>
                AGENT: {`${agent.firstName} ${agent.lastName}`}
              </Typography>
              <CustomDivider />
              {
                agentContacts.filter((agentContact) => agentContact.agent._id === agent._id)
                  .map((item) => (
                    <Typography key={item._id} className={classes.contact}>
                      {`${item.contact.firstName} ${item.contact.lastName}`}
                    </Typography>
                  ))
              }
            </div>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default memo(AgentContact)