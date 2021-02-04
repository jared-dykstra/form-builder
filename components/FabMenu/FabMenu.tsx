import React, { FC, useCallback } from 'react'
import {
  ClickAwayListener,
  Fab,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    popper: {
      // Render in front of <Fab />
      zIndex: 5,
    },
    paper: {
      padding: theme.spacing(1, 1),
    },
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
        '@media (hover: none)': {
          boxShadow: 'none',
        },
      },
      '&$focusVisible': {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
      '&$disabled': {
        boxShadow: 'none',
      },
    },
  })
)

interface MenuItemProps {
  id: string
  value: string
  onSelect: (event: React.MouseEvent<EventTarget>, id: string) => void
}

const FabMenuItem: FC<MenuItemProps> = ({ id, value, onSelect }) => {
  const handleSelect = useCallback(
    (event: React.MouseEvent<EventTarget>) => onSelect(event, id),
    [id, onSelect]
  )
  return <MenuItem onClick={handleSelect}>{value}</MenuItem>
}

interface Props {
  title: string
  prompt?: string
  options: Record<string, string>
  onSelect: (id: string) => void
  color?: 'primary' | 'secondary' | 'default'
  size?: 'small' | 'medium' | 'large'
  icon?: JSX.Element
  flat?: boolean
}

export const FabMenu: FC<Props> = ({
  title,
  options,
  prompt,
  onSelect,
  color,
  size,
  icon,
  flat = false,
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>, id?: string) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    if (id) {
      onSelect(id)
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root}>
      <div>
        <Fab
          color={color}
          size={size}
          variant="extended"
          ref={anchorRef}
          aria-label="add"
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={!flat ? classes.disableElevation : undefined}
        >
          {icon}&nbsp;{title}
        </Fab>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={classes.popper}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper className={classes.paper}>
                {prompt && <Typography>{prompt}</Typography>}
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {Object.entries(options).map(([key, value]) => (
                      <FabMenuItem
                        key={key}
                        id={key}
                        value={value}
                        onSelect={handleClose}
                      />
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}
