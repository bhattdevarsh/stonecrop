(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["@sedum/atable"] = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const getUpCell = (event) => {
    var _a;
    const target = event.target;
    let $upCell;
    if (target instanceof HTMLTableCellElement) {
      const $prevRow = (_a = target.parentElement) == null ? void 0 : _a.previousElementSibling;
      if ($prevRow) {
        const $prevRowCells = Array.from($prevRow.children);
        const $prevCell = $prevRowCells[target.cellIndex];
        if ($prevCell) {
          $upCell = $prevCell;
        }
      }
    }
    return $upCell;
  };
  const getTopCell = (event) => {
    var _a;
    const target = event.target;
    let $topCell;
    if (target instanceof HTMLTableCellElement) {
      const $table = (_a = target.parentElement) == null ? void 0 : _a.parentElement;
      if ($table) {
        const $firstRow = $table.firstElementChild;
        const $navCell = $firstRow.children[target.cellIndex];
        if ($navCell) {
          $topCell = $navCell;
        }
      }
    }
    return $topCell;
  };
  const getDownCell = (event) => {
    var _a;
    const target = event.target;
    let $downCell;
    if (target instanceof HTMLTableCellElement) {
      const $nextRow = (_a = target.parentElement) == null ? void 0 : _a.nextElementSibling;
      if ($nextRow) {
        const $nextRowCells = Array.from($nextRow.children);
        const $nextCell = $nextRowCells[target.cellIndex];
        if ($nextCell) {
          $downCell = $nextCell;
        }
      }
    }
    return $downCell;
  };
  const getBottomCell = (event) => {
    var _a;
    const target = event.target;
    let $bottomCell;
    if (target instanceof HTMLTableCellElement) {
      const $table = (_a = target.parentElement) == null ? void 0 : _a.parentElement;
      if ($table) {
        const $lastRow = $table.lastElementChild;
        const $navCell = $lastRow.children[target.cellIndex];
        if ($navCell) {
          $bottomCell = $navCell;
        }
      }
    }
    return $bottomCell;
  };
  const getPrevCell = (event) => {
    var _a;
    const target = event.target;
    let $prevCell;
    if (target.previousElementSibling) {
      $prevCell = target.previousElementSibling;
    } else {
      const $prevRow = (_a = target.parentElement) == null ? void 0 : _a.previousElementSibling;
      if ($prevRow) {
        const $prevRowCells = Array.from($prevRow.children);
        $prevRowCells.reverse();
        $prevCell = $prevRowCells[0];
      }
    }
    return $prevCell;
  };
  const getNextCell = (event) => {
    var _a;
    const target = event.target;
    let $nextCell;
    if (target.nextElementSibling) {
      $nextCell = target.nextElementSibling;
    } else {
      const $nextRow = (_a = target.parentElement) == null ? void 0 : _a.nextElementSibling;
      if ($nextRow) {
        const $nextRowCells = Array.from($nextRow.children);
        $nextCell = $nextRowCells[0];
      }
    }
    return $nextCell;
  };
  const getFirstCell = (event) => {
    const target = event.target;
    const $parent = target.parentElement;
    const $firstCell = $parent.firstElementChild;
    return $firstCell;
  };
  const getLastCell = (event) => {
    const target = event.target;
    const $parent = target.parentElement;
    const $lastCell = $parent.lastElementChild;
    return $lastCell;
  };
  const modifierKeys = ["alt", "control", "shift", "meta"];
  const eventKeyMap = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right"
  };
  const defaultKeypressHandlers = {
    "keydown.up": (event) => {
      const $upCell = getUpCell(event);
      if ($upCell) {
        event.preventDefault();
        event.stopPropagation();
        $upCell.focus();
      }
    },
    "keydown.down": (event) => {
      const $downCell = getDownCell(event);
      if ($downCell) {
        event.preventDefault();
        event.stopPropagation();
        $downCell.focus();
      }
    },
    "keydown.left": (event) => {
      const $prevCell = getPrevCell(event);
      if ($prevCell) {
        event.preventDefault();
        event.stopPropagation();
        $prevCell.focus();
      }
    },
    "keydown.right": (event) => {
      const $nextCell = getNextCell(event);
      if ($nextCell) {
        event.preventDefault();
        event.stopPropagation();
        $nextCell.focus();
      }
    },
    "keydown.control.up": (event) => {
      const $topCell = getTopCell(event);
      if ($topCell) {
        event.preventDefault();
        event.stopPropagation();
        $topCell.focus();
      }
    },
    "keydown.control.down": (event) => {
      const $bottomCell = getBottomCell(event);
      if ($bottomCell) {
        event.preventDefault();
        event.stopPropagation();
        $bottomCell.focus();
      }
    },
    "keydown.control.left": (event) => {
      const $firstCell = getFirstCell(event);
      if ($firstCell) {
        event.preventDefault();
        event.stopPropagation();
        $firstCell.focus();
      }
    },
    "keydown.control.right": (event) => {
      const $lastCell = getLastCell(event);
      if ($lastCell) {
        event.preventDefault();
        event.stopPropagation();
        $lastCell.focus();
      }
    },
    "keydown.end": (event) => {
      const $lastCell = getLastCell(event);
      if ($lastCell) {
        event.preventDefault();
        event.stopPropagation();
        $lastCell.focus();
      }
    },
    "keydown.enter": (event) => {
      const target = event.target;
      if (target instanceof HTMLTableCellElement) {
        event.preventDefault();
        event.stopPropagation();
        const $downCell = getDownCell(event);
        if ($downCell) {
          $downCell.focus();
        }
      }
    },
    "keydown.shift.enter": (event) => {
      const target = event.target;
      if (target instanceof HTMLTableCellElement) {
        event.preventDefault();
        event.stopPropagation();
        const $upCell = getUpCell(event);
        if ($upCell) {
          $upCell.focus();
        }
      }
    },
    "keydown.home": (event) => {
      const $firstCell = getFirstCell(event);
      if ($firstCell) {
        event.preventDefault();
        event.stopPropagation();
        $firstCell.focus();
      }
    },
    "keydown.tab": (event) => {
      const $nextCell = getNextCell(event);
      if ($nextCell) {
        event.preventDefault();
        event.stopPropagation();
        $nextCell.focus();
      }
    },
    "keydown.shift.tab": (event) => {
      const $prevCell = getPrevCell(event);
      if ($prevCell) {
        event.preventDefault();
        event.stopPropagation();
        $prevCell.focus();
      }
    }
  };
  function useKeyboardNav(options) {
    const getSelectors = (option) => {
      let $parent = null;
      if (option.parent) {
        if (typeof option.parent === "string") {
          $parent = document.querySelector(option.parent);
        } else if (option.parent instanceof Element) {
          $parent = option.parent;
        } else {
          $parent = option.parent.value;
        }
      }
      let selectors = [];
      if (option.selectors) {
        if (typeof option.selectors === "string") {
          selectors = $parent ? Array.from($parent.querySelectorAll(option.selectors)) : Array.from(document.querySelectorAll(option.selectors));
        } else if (option.selectors instanceof Element) {
          selectors.push(option.selectors);
        } else {
          if (Array.isArray(option.selectors.value)) {
            for (const element of option.selectors.value) {
              if (element instanceof Element) {
                selectors.push(element);
              } else {
                selectors.push(element.$el);
              }
            }
          } else {
            selectors.push(option.selectors.value);
          }
        }
      }
      return selectors;
    };
    const getEventListener = (option) => {
      return (event) => {
        const activeKey = eventKeyMap[event.key] || event.key.toLowerCase();
        if (modifierKeys.includes(activeKey))
          return;
        for (const key of Object.keys(option.handlers)) {
          const [eventType, ...keys] = key.split(".");
          if (eventType !== "keydown") {
            continue;
          }
          if (keys.includes(activeKey)) {
            const listener = option.handlers[key];
            const hasModifier = keys.filter((key2) => modifierKeys.includes(key2));
            const isModifierActive = modifierKeys.some((key2) => {
              const modifierKey = key2.charAt(0).toUpperCase() + key2.slice(1);
              return event.getModifierState(modifierKey);
            });
            if (hasModifier.length > 0) {
              if (isModifierActive) {
                for (const modifier of modifierKeys) {
                  if (keys.includes(modifier)) {
                    const modifierKey = modifier.charAt(0).toUpperCase() + modifier.slice(1);
                    if (event.getModifierState(modifierKey)) {
                      listener(event);
                    }
                  }
                }
              }
            } else {
              if (!isModifierActive) {
                listener(event);
              }
            }
          }
        }
      };
    };
    vue.onMounted(() => {
      for (const option of options) {
        const selectors = getSelectors(option);
        for (const selector of selectors) {
          selector.addEventListener("keydown", getEventListener(option));
        }
      }
    });
    vue.onBeforeUnmount(() => {
      for (const option of options) {
        const selectors = getSelectors(option);
        for (const selector of selectors) {
          selector.removeEventListener("keydown", getEventListener(option));
        }
      }
    });
  }
  const _hoisted_1$2 = ["data-colindex", "data-rowindex", "data-editable", "contenteditable"];
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "ACell",
    props: {
      colIndex: null,
      rowIndex: null,
      tableid: null
    },
    setup(__props) {
      var _a;
      const props = __props;
      const tableData = vue.inject(props.tableid);
      const cell = vue.ref(null);
      let cellModified = vue.ref(false);
      const displayValue = vue.computed(() => {
        const data = tableData.cellData(props.colIndex, props.rowIndex);
        if (tableData.columns[props.colIndex].format) {
          const format = tableData.columns[props.colIndex].format;
          if (typeof format === "function") {
            return format(data);
          } else if (typeof format === "string") {
            const formatFn = Function(`"use strict";return (${format})`)();
            return formatFn(data);
          } else {
            return data;
          }
        } else {
          return data;
        }
      });
      const handleInput = () => {
        if (tableData.columns[props.colIndex].mask)
          ;
        const component = tableData.columns[props.colIndex].component;
        if (component && vue.resolveDynamicComponent(component)) {
          const domRect = cell.value.getBoundingClientRect();
          tableData.modal.visible = true;
          tableData.modal.colIndex = props.colIndex;
          tableData.modal.rowIndex = props.rowIndex;
          tableData.modal.parent = cell.value;
          tableData.modal.top = domRect.top + domRect.height;
          tableData.modal.left = domRect.left;
          tableData.modal.width = cellWidth.value;
          tableData.modal.component = component;
        }
      };
      useKeyboardNav([
        {
          selectors: cell,
          handlers: {
            "keydown.f2": handleInput,
            "keydown.alt.up": handleInput,
            "keydown.alt.down": handleInput,
            "keydown.alt.left": handleInput,
            "keydown.alt.right": handleInput
          }
        }
      ]);
      const textAlign = vue.computed(() => {
        return tableData.columns[props.colIndex].align || "center";
      });
      const cellWidth = vue.computed(() => {
        return tableData.columns[props.colIndex].width || "40ch";
      });
      let currentData = "";
      const onFocus = () => {
        if (cell.value) {
          currentData = cell.value.innerText;
          cell.value.tabIndex = 0;
        }
      };
      const onChange = (event) => {
        if (cell.value) {
          if (event.type == "blur") {
            cell.value.tabIndex = -1;
          }
          if (cell.value.innerHTML !== currentData) {
            currentData = cell.value.innerText;
            cell.value.dispatchEvent(new Event("change"));
            cellModified.value = true;
          }
        }
      };
      const getIndent = (colKey, indent) => {
        if (indent && colKey === 0 && indent > 0) {
          return `${indent}ch`;
        } else {
          return "inherit";
        }
      };
      const cellStyle = {
        textAlign: textAlign.value,
        width: cellWidth.value,
        backgroundColor: !cellModified.value ? "inherit" : "var(--cell-modified-color)",
        fontWeight: !cellModified.value ? "inherit" : "bold",
        paddingLeft: getIndent(props.colIndex, (_a = tableData.display[props.rowIndex]) == null ? void 0 : _a.indent)
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("td", {
          ref_key: "cell",
          ref: cell,
          "data-colindex": __props.colIndex,
          "data-rowindex": __props.rowIndex,
          "data-editable": vue.unref(tableData).columns[__props.colIndex].edit,
          contenteditable: vue.unref(tableData).columns[__props.colIndex].edit,
          tabindex: -1,
          spellcheck: false,
          style: cellStyle,
          onFocus,
          onPaste: onChange,
          onBlur: onChange,
          onInput: onChange,
          onClick: handleInput
        }, vue.toDisplayString(vue.unref(displayValue)), 41, _hoisted_1$2);
      };
    }
  });
  const ACell_vue_vue_type_style_index_0_scoped_0fe8c033_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const ACell = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0fe8c033"]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "ARow",
    props: {
      row: null,
      rowIndex: null,
      tableid: null
    },
    setup(__props) {
      const props = __props;
      const tableData = vue.inject(props.tableid);
      const numberedRowStyle = {
        backgroundColor: "var(--brand-color)",
        borderColor: "var(--header-border-color)",
        color: "var(--header-text-color)",
        fontWeight: "bold",
        textAlign: "center",
        userSelect: "none",
        width: tableData.numberedRowWidth.value
      };
      const treeRowStyle = {
        backgroundColor: "var(--brand-color)",
        borderColor: "var(--header-border-color)",
        color: "var(--header-text-color)",
        fontWeight: "bold",
        textAlign: "center",
        userSelect: "none",
        width: "2ch"
      };
      const getRowExpandSymbol = () => {
        if (!tableData.config.treeView) {
          return "";
        }
        if (tableData.display[props.rowIndex].isRoot) {
          if (tableData.display[props.rowIndex].childrenOpen) {
            return "-";
          } else {
            return "+";
          }
        }
        if (tableData.display[props.rowIndex].isParent) {
          if (tableData.display[props.rowIndex].childrenOpen) {
            return "-";
          } else {
            return "+";
          }
        } else {
          return "";
        }
      };
      const rowVisible = () => {
        if (!tableData.config.treeView) {
          return true;
        }
        return tableData.display[props.rowIndex].isRoot || tableData.display[props.rowIndex].open;
      };
      const toggleRowExpand = (rowIndex) => {
        tableData.toggleRowExpand(rowIndex);
      };
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("tr", null, [
          vue.unref(tableData).config.numberedRows ? (vue.openBlock(), vue.createElementBlock("td", {
            key: 0,
            id: "row-index",
            tabIndex: -1,
            style: numberedRowStyle
          }, vue.toDisplayString(__props.rowIndex + 1), 1)) : vue.createCommentVNode("", true),
          vue.unref(tableData).config.treeView ? (vue.openBlock(), vue.createElementBlock("td", {
            key: 1,
            id: "row-index",
            tabIndex: -1,
            style: treeRowStyle,
            onClick: _cache[0] || (_cache[0] = ($event) => toggleRowExpand(__props.rowIndex))
          }, vue.toDisplayString(getRowExpandSymbol()), 1)) : vue.createCommentVNode("", true),
          !vue.unref(tableData).config.numberedRows && !vue.unref(tableData).config.treeView ? vue.renderSlot(_ctx.$slots, "indexCell", { key: 2 }) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default")
        ], 512)), [
          [vue.vShow, rowVisible()]
        ]);
      };
    }
  });
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  function validate(uuid) {
    return typeof uuid === "string" && REGEX.test(uuid);
  }
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).substr(1));
  }
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i2 = 0; i2 < 16; ++i2) {
        buf[offset + i2] = rnds[i2];
      }
      return buf;
    }
    return stringify(rnds);
  }
  class TableDataStore {
    constructor(id, columns, rows, config, table, display) {
      this.id = id || v4();
      this.rows = rows;
      this.columns = vue.reactive(columns);
      this.config = vue.reactive(config);
      this.table = table || vue.reactive(this.createTableObject());
      this.display = this.createDisplayObject(display);
      this.modal = vue.reactive({ visible: false });
    }
    createTableObject() {
      const table = {};
      for (const [colIndex, column] of this.columns.entries()) {
        for (const [rowIndex, row] of this.rows.entries()) {
          table[`${colIndex}:${rowIndex}`] = row[column.name];
        }
      }
      return table;
    }
    createDisplayObject(display) {
      const defaultDisplay = [Object.assign({}, { modified: false })];
      if (display) {
        if ("0:0" in display) {
          return display;
        }
      }
      const parents = /* @__PURE__ */ new Set();
      for (let rowIndex = this.rows.length - 1; rowIndex >= 0; rowIndex--) {
        const row = this.rows[rowIndex];
        if (row.parent) {
          parents.add(row.parent);
        }
        defaultDisplay[rowIndex] = {
          childrenOpen: false,
          indent: row.indent || null,
          isParent: parents.has(rowIndex),
          isRoot: row.parent === null || row.parent === void 0,
          modified: false,
          open: row.parent === null || row.parent === void 0,
          parent: row.parent
        };
      }
      return vue.reactive(defaultDisplay);
    }
    get zeroColumn() {
      return this.config.numberedRows || this.config.treeView;
    }
    get numberedRowWidth() {
      return vue.computed(() => {
        return String(Math.ceil(this.rows.length / 100) + 1) + "ch";
      });
    }
    cellData(colIndex, rowIndex) {
      return this.table[`${colIndex}:${rowIndex}`];
    }
    setCellData(rowIndex, colIndex, value) {
      if (this.table[`${colIndex}:${rowIndex}`] !== value) {
        this.display[rowIndex].modified = true;
      }
      this.table[`${colIndex}:${rowIndex}`] = value;
      return this.table[`${colIndex}:${rowIndex}`];
    }
    toggleRowExpand(rowIndex) {
      if (!this.config.treeView) {
        return;
      }
      this.display[rowIndex].childrenOpen = !this.display[rowIndex].childrenOpen;
      for (let index = this.rows.length - 1; index >= 0; index--) {
        if (this.display[index].parent === rowIndex) {
          this.display[index].open = !this.display[index].open;
          if (this.display[index].childrenOpen) {
            this.toggleRowExpand(index);
          }
        }
      }
    }
  }
  const _sfc_main$2 = vue.defineComponent({
    name: "ATableHeader",
    props: {
      columns: {
        type: Array,
        required: true
      },
      config: {
        type: Object,
        default: () => new Object()
      },
      tableid: {
        type: String
      }
    },
    setup(props) {
      const tableData = vue.inject(props.tableid);
      return { tableData };
    }
  });
  const ATableHeader_vue_vue_type_style_index_0_scoped_80fa6b2a_lang = "";
  const _hoisted_1$1 = { key: 0 };
  const _hoisted_2 = { tabindex: "-1" };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.columns.length ? (vue.openBlock(), vue.createElementBlock("thead", _hoisted_1$1, [
      vue.createElementVNode("tr", _hoisted_2, [
        _ctx.tableData.zeroColumn ? (vue.openBlock(), vue.createElementBlock("th", {
          key: 0,
          style: vue.normalizeStyle({ minWidth: _ctx.tableData.numberedRowWidth.value })
        }, null, 4)) : vue.createCommentVNode("", true),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columns, (column, colKey) => {
          var _a;
          return vue.openBlock(), vue.createElementBlock("th", {
            key: colKey,
            tabindex: "-1",
            style: vue.normalizeStyle({
              textAlign: ((_a = column.align) == null ? void 0 : _a.toLowerCase()) || "center",
              minWidth: column.width || "40ch"
            })
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString(column.label || String.fromCharCode(colKey + 97).toUpperCase()), 1)
            ], true)
          ], 4);
        }), 128))
      ])
    ])) : vue.createCommentVNode("", true);
  }
  const ATableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-80fa6b2a"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "ATableModal",
    props: {
      colIndex: null,
      rowIndex: null,
      tableid: null
    },
    setup(__props) {
      const props = __props;
      vue.inject(props.tableid);
      const handleInput = (event) => {
        event.stopPropagation();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref: "amodal",
          class: "amodal",
          tabindex: "-1",
          onClick: handleInput,
          onInput: handleInput
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 544);
      };
    }
  });
  const ATableModal_vue_vue_type_style_index_0_scoped_1bd2b677_lang = "";
  const ATableModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1bd2b677"]]);
  const _hoisted_1 = { class: "atable" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "ATable",
    props: {
      id: null,
      columns: null,
      rows: { default: () => [] },
      config: { default: () => new Object() },
      tableid: null
    },
    setup(__props) {
      const props = __props;
      let tableData = new TableDataStore(props.id, props.columns, props.rows, props.config);
      vue.provide(tableData.id, tableData);
      useKeyboardNav([
        {
          selectors: "td",
          handlers: defaultKeypressHandlers
        }
      ]);
      const clickOutside = (event) => {
        var _a;
        if (!((_a = tableData.modal.parent) == null ? void 0 : _a.contains(event.target))) {
          if (tableData.modal.visible) {
            tableData.modal.visible = false;
          }
        }
      };
      window.addEventListener("click", clickOutside);
      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          if (tableData.modal.visible) {
            tableData.modal.visible = false;
          }
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("table", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "tableheader", {}, () => [
            vue.createVNode(ATableHeader, {
              columns: vue.unref(tableData).columns,
              config: vue.unref(tableData).config,
              tableid: vue.unref(tableData).id
            }, null, 8, ["columns", "config", "tableid"])
          ], true),
          vue.createElementVNode("tbody", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tableData).rows, (row, rowIndex) => {
              return vue.openBlock(), vue.createBlock(_sfc_main$3, {
                key: row.id || vue.unref(v4)(),
                row,
                rowIndex,
                tableid: vue.unref(tableData).id
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tableData).columns, (col, colIndex) => {
                    var _a;
                    return vue.openBlock(), vue.createBlock(ACell, {
                      key: colIndex,
                      tableid: vue.unref(tableData).id,
                      col,
                      spellcheck: "false",
                      rowIndex,
                      colIndex: colIndex + (vue.unref(tableData).zeroColumn ? 0 : -1),
                      style: vue.normalizeStyle({
                        textAlign: ((_a = col == null ? void 0 : col.align) == null ? void 0 : _a.toLowerCase()) || "center",
                        minWidth: (col == null ? void 0 : col.width) || "40ch"
                      })
                    }, null, 8, ["tableid", "col", "rowIndex", "colIndex", "style"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["row", "rowIndex", "tableid"]);
            }), 128))
          ]),
          vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true),
          vue.withDirectives(vue.createVNode(ATableModal, {
            colIndex: vue.unref(tableData).modal.colIndex,
            rowIndex: vue.unref(tableData).modal.rowIndex,
            tableid: vue.unref(tableData).id,
            style: vue.normalizeStyle({
              left: vue.unref(tableData).modal.left + "px",
              top: vue.unref(tableData).modal.top + "px",
              maxWidth: vue.unref(tableData).modal.width + "px"
            })
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(tableData).modal.component), {
                colIndex: vue.unref(tableData).modal.colIndex,
                rowIndex: vue.unref(tableData).modal.rowIndex,
                tableid: vue.unref(tableData).id
              }, null, 8, ["colIndex", "rowIndex", "tableid"]))
            ]),
            _: 1
          }, 8, ["colIndex", "rowIndex", "tableid", "style"]), [
            [vue.vShow, vue.unref(tableData).modal.visible]
          ])
        ]);
      };
    }
  });
  const ATable_vue_vue_type_style_index_0_scoped_f3a7faf7_lang = "";
  const ATable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3a7faf7"]]);
  function install(app) {
    app.component("ACell", ACell);
    app.component("ARow", _sfc_main$3);
    app.component("ATable", ATable);
    app.component("ATableHeader", ATableHeader);
    app.component("ATableModal", ATableModal);
  }
  exports2.ACell = ACell;
  exports2.ARow = _sfc_main$3;
  exports2.ATable = ATable;
  exports2.ATableHeader = ATableHeader;
  exports2.ATableModal = ATableModal;
  exports2.TableDataStore = TableDataStore;
  exports2.install = install;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
