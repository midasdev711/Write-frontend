import {keymap} from "prosemirror-keymap"
import {history} from "prosemirror-history"
import {baseKeymap} from "prosemirror-commands"
import {Plugin} from "prosemirror-state"
import {dropCursor} from "prosemirror-dropcursor"
import {gapCursor} from "prosemirror-gapcursor"
import {menuBar} from "prosemirror-menu"

import {buildMenuItems} from "./menu"
import {buildKeymap} from "./keymap"
import {buildInputRules} from "./inputrules"

export {buildMenuItems, buildKeymap, buildInputRules}

export function setupEditor(options) {
  let plugins = [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema, options.mapKeys)),
    keymap(baseKeymap),
    dropCursor(),
    gapCursor()
  ]
  if (options.menuBar !== false)
    plugins.push(menuBar({floating: options.floatingMenu !== false,
      content: options.menuContent || buildMenuItems(options.schema).fullMenu}))
  if (options.history !== false)
    plugins.push(history())

  return plugins.concat(new Plugin({
    props: {
      attributes: {class: "ProseMirror-example-setup-style"}
    }
  }))
}
