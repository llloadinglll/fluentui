import * as React from 'react';

import { Menu, MenuTrigger, MenuList, MenuItem, MenuDivider, MenuPopover } from '../index';

import { Button } from '@fluentui/react-button';
import {
  Cut20Regular as CutIcon,
  ClipboardPaste20Regular as PasteIcon,
  Edit20Regular as EditIcon,
} from '@fluentui/react-icons';

export const VisualDividerOnly = () => (
  <Menu>
    <MenuTrigger>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        <MenuDivider />
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);

VisualDividerOnly.parameters = {
  docs: {
    description: {
      story: [
        'If a divider is needed only for visual aesthetics, the `MenuDivider` component can be used separately.',
        'When items should be logically groupped, use the `MenuGroup` and `MenuGroupHeader` components',
        'for correct accessible markup.',
      ].join('\n'),
    },
  },
};
