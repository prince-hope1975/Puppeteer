// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  uint256 _Some;
  }
struct T1 {
  uint256 _claimed;
  uint256 _rewards;
  }
enum _enum_T2 {None, Some}
struct T2 {
  _enum_T2 which;
  bool _None;
  T1 _Some;
  }
enum _enum_T3 {None, Some}
struct T3 {
  _enum_T3 which;
  bool _None;
  bool _Some;
  }
struct T4 {
  address payable elem0;
  }
struct T5 {
  uint256 elem0;
  }
struct T6 {
  address payable elem0;
  uint256 elem1;
  }
struct T8 {
  address payable elem0;
  address payable elem1;
  uint256 elem2;
  }
struct T9 {
  uint256 elem0;
  address payable elem1;
  }
enum _enum_T10 {Admin_addAdmin0_181, Admin_deposit0_181, Admin_editUserReward0_181, Admin_endContractAndTransfer0_181, Admin_revokeAdmin0_181, Admin_setReward0_181, User_claim0_181, User_optin0_181}
struct T10 {
  _enum_T10 which;
  T4 _Admin_addAdmin0_181;
  T5 _Admin_deposit0_181;
  T6 _Admin_editUserReward0_181;
  bool _Admin_endContractAndTransfer0_181;
  T4 _Admin_revokeAdmin0_181;
  T8 _Admin_setReward0_181;
  T9 _User_claim0_181;
  bool _User_optin0_181;
  }
struct T11 {
  uint256 elem0;
  T10 elem1;
  }
struct T12 {
  uint256 _i;
  uint256 _scale;
  }
struct T13 {
  T12 _i;
  bool _sign;
  }
struct T14 {
  address payable v3360;
  bytes30 v3361;
  uint256 v3373;
  uint256 v3394;
  bool v3395;
  T13 v3396;
  uint256 v3397;
  uint256 v3398;
  uint256 v3399;
  uint256 v3400;
  }
struct T15 {
  address payable elem0;
  address payable elem1;
  }
struct T16 {
  uint256 elem0;
  bytes30 elem1;
  }
struct T17 {
  uint256 _bal;
  bool _keepGoing;
  T13 _percent;
  uint256 _total_amount_claimed;
  uint256 _total_rewards_allcoated;
  uint256 _total_users_claim;
  uint256 _usersNo;
  }
struct T18 {
  address payable elem0;
  bytes30 elem1;
  T17 elem2;
  uint256 elem3;
  uint256 elem4;
  }
struct T19 {
  address payable addr;
  uint256 amount;
  bytes30 projectName;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  event _reach_e0(address _who, T16 _a);
  event _reach_e2(address _who, T11 _a);
  event _reach_oe_v3700(bool v0);
  event _reach_oe_v4134(bool v0);
  event _reach_oe_v4574(bool v0);
  event _reach_oe_v5003(bool v0);
  event _reach_oe_v5433(bool v0);
  event _reach_oe_v5886(bool v0);
  event _reach_oe_v6387(bool v0);
  event _reach_oe_v6885(bool v0);
  event claimed(T19 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (address => T0) _reachm_0;
  function __reachm_0Ref(address addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(address addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (uint256 => T2) _reachm_1;
  function __reachm_1Ref(uint256 addr) internal view returns (T2 memory res) {
    if (_reachm_1[addr].which == _enum_T2.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T2.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(uint256 addr) external view returns (T2 memory res) {
    res = __reachm_1Ref(addr);
    }
  mapping (address => T3) _reachm_2;
  function __reachm_2Ref(address addr) internal view returns (T3 memory res) {
    if (_reachm_2[addr].which == _enum_T3.Some) {
      res = _reachm_2[addr];
      }
    else {
      res.which = _enum_T3.None;
      res._None = false;
      }
    }
  function _reachm_2Ref(address addr) external view returns (T3 memory res) {
    res = __reachm_2Ref(addr);
    }
  mapping (address => T3) _reachm_3;
  function __reachm_3Ref(address addr) internal view returns (T3 memory res) {
    if (_reachm_3[addr].which == _enum_T3.Some) {
      res = _reachm_3[addr];
      }
    else {
      res.which = _enum_T3.None;
      res._None = false;
      }
    }
  function _reachm_3Ref(address addr) external view returns (T3 memory res) {
    res = __reachm_3Ref(addr);
    }
  mapping (address => T3) _reachm_4;
  function __reachm_4Ref(address addr) internal view returns (T3 memory res) {
    if (_reachm_4[addr].which == _enum_T3.Some) {
      res = _reachm_4[addr];
      }
    else {
      res.which = _enum_T3.None;
      res._None = false;
      }
    }
  function _reachm_4Ref(address addr) external view returns (T3 memory res) {
    res = __reachm_4Ref(addr);
    }
  struct Memory {
    bool nil;
    bool _reachr_Admin_addAdmin;
    bool _reachr_Admin_deposit;
    bool _reachr_Admin_editUserReward;
    bool _reachr_Admin_endContractAndTransfer;
    bool _reachr_Admin_revokeAdmin;
    bool _reachr_Admin_setReward;
    bool _reachr_Info_Admins;
    uint256 _reachr_Info_balance;
    uint256 _reachr_Info_claimed;
    bool _reachr_Info_opted;
    uint256 _reachr_Info_totalAllocatedFunds;
    uint256 _reachr_Info_totalAmountClaimed;
    uint256 _reachr_Info_totalClaimed;
    uint256 _reachr_Info_totalOptedIn;
    uint256 _reachr_Info_totalRewards;
    uint256 _reachr_Info_userReward;
    bool _reachr_User_claim;
    bool _reachr_User_optin;
    }
  struct _F10578 {
    T4 v10522;
    T10 v10523;
    }
  function _reacha_Admin_addAdmin(address payable _a, Memory memory _Memory) internal  {
    _F10578 memory _f;
    _f.v10522.elem0 = _a;
    _f.v10523.which = _enum_T10.Admin_addAdmin0_181;
    _f.v10523._Admin_addAdmin0_181 = _f.v10522;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10523;
    _reachi_2(_ja, _Memory);
    }
  struct _F10579 {
    T5 v10528;
    T10 v10529;
    }
  function _reacha_Admin_deposit(uint256 _a, Memory memory _Memory) internal  {
    _F10579 memory _f;
    _f.v10528.elem0 = _a;
    _f.v10529.which = _enum_T10.Admin_deposit0_181;
    _f.v10529._Admin_deposit0_181 = _f.v10528;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10529;
    _reachi_2(_ja, _Memory);
    }
  struct _F10580 {
    T6 v10535;
    T10 v10536;
    }
  function _reacha_Admin_editUserReward(T6 memory _a, Memory memory _Memory) internal  {
    _F10580 memory _f;
    _f.v10535.elem0 = _a.elem0;
    _f.v10535.elem1 = _a.elem1;
    _f.v10536.which = _enum_T10.Admin_editUserReward0_181;
    _f.v10536._Admin_editUserReward0_181 = _f.v10535;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10536;
    _reachi_2(_ja, _Memory);
    }
  struct _F10581 {
    bool v10541;
    T10 v10542;
    }
  function _reacha_Admin_endContractAndTransfer(bool _a, Memory memory _Memory) internal  {
    _F10581 memory _f;
    _f.v10542.which = _enum_T10.Admin_endContractAndTransfer0_181;
    _f.v10542._Admin_endContractAndTransfer0_181 = _f.v10541;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10542;
    _reachi_2(_ja, _Memory);
    }
  struct _F10582 {
    T4 v10546;
    T10 v10547;
    }
  function _reacha_Admin_revokeAdmin(address payable _a, Memory memory _Memory) internal  {
    _F10582 memory _f;
    _f.v10546.elem0 = _a;
    _f.v10547.which = _enum_T10.Admin_revokeAdmin0_181;
    _f.v10547._Admin_revokeAdmin0_181 = _f.v10546;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10547;
    _reachi_2(_ja, _Memory);
    }
  struct _F10583 {
    T8 v10554;
    T10 v10555;
    }
  function _reacha_Admin_setReward(T8 memory _a, Memory memory _Memory) internal  {
    _F10583 memory _f;
    _f.v10554.elem0 = _a.elem0;
    _f.v10554.elem1 = _a.elem1;
    _f.v10554.elem2 = _a.elem2;
    _f.v10555.which = _enum_T10.Admin_setReward0_181;
    _f.v10555._Admin_setReward0_181 = _f.v10554;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10555;
    _reachi_2(_ja, _Memory);
    }
  function _reacha_Info_Admins(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(7) /*'(./index.rsh:40:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_Admins = ((uint256((__reachm_2Ref((_a))).which)) == uint256(1));
    }
  function _reacha_Info_balance(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(8) /*'(./index.rsh:46:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_balance = _svs.v3373;
    }
  struct _F10586 {
    T15 v3422;
    T1 v3424;
    }
  function _reacha_Info_claimed(T15 memory _a, Memory memory _Memory) internal view {
    _F10586 memory _f;
    reachRequire(((current_step == uint256(3))), uint256(9) /*'(./index.rsh:38:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _f.v3422.elem0 = (_a.elem0);
    _f.v3422.elem1 = (_a.elem1);
    _f.v3424._claimed = uint256(0);
    _f.v3424._rewards = uint256(0);
    _Memory._reachr_Info_claimed = ((((__reachm_1Ref(uint256(keccak256(abi.encode(_f.v3422))))).which == _enum_T2.Some ? (__reachm_1Ref(uint256(keccak256(abi.encode(_f.v3422)))))._Some : _f.v3424))._claimed);
    }
  function _reacha_Info_opted(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(10) /*'(./index.rsh:41:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_opted = ((uint256((__reachm_4Ref((_a))).which)) == uint256(1));
    }
  function _reacha_Info_totalAllocatedFunds(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(11) /*'(./index.rsh:45:24:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_totalAllocatedFunds = _svs.v3398;
    }
  function _reacha_Info_totalAmountClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(12) /*'(./index.rsh:44:23:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_totalAmountClaimed = _svs.v3397;
    }
  function _reacha_Info_totalClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(13) /*'(./index.rsh:42:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_totalClaimed = _svs.v3399;
    }
  function _reacha_Info_totalOptedIn(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(14) /*'(./index.rsh:43:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_totalOptedIn = _svs.v3400;
    }
  function _reacha_Info_totalRewards(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(15) /*'(./index.rsh:36:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _Memory._reachr_Info_totalRewards = (((__reachm_0Ref((_a))).which == _enum_T0.Some ? (__reachm_0Ref((_a)))._Some : uint256(0)));
    }
  struct _F10593 {
    T15 v3415;
    T1 v3417;
    }
  function _reacha_Info_userReward(T15 memory _a, Memory memory _Memory) internal view {
    _F10593 memory _f;
    reachRequire(((current_step == uint256(3))), uint256(16) /*'(./index.rsh:37:15:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    _f.v3415.elem0 = (_a.elem0);
    _f.v3415.elem1 = (_a.elem1);
    _f.v3417._claimed = uint256(0);
    _f.v3417._rewards = uint256(0);
    _Memory._reachr_Info_userReward = ((((__reachm_1Ref(uint256(keccak256(abi.encode(_f.v3415))))).which == _enum_T2.Some ? (__reachm_1Ref(uint256(keccak256(abi.encode(_f.v3415)))))._Some : _f.v3417))._rewards);
    }
  struct _F10594 {
    T9 v10563;
    T10 v10564;
    }
  function _reacha_User_claim(T9 memory _a, Memory memory _Memory) internal  {
    _F10594 memory _f;
    _f.v10563.elem0 = _a.elem0;
    _f.v10563.elem1 = _a.elem1;
    _f.v10564.which = _enum_T10.User_claim0_181;
    _f.v10564._User_claim0_181 = _f.v10563;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10564;
    _reachi_2(_ja, _Memory);
    }
  struct _F10595 {
    bool v10569;
    T10 v10570;
    }
  function _reacha_User_optin(bool _a, Memory memory _Memory) internal  {
    _F10595 memory _f;
    _f.v10570.which = _enum_T10.User_optin0_181;
    _f.v10570._User_optin0_181 = _f.v10569;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10570;
    _reachi_2(_ja, _Memory);
    }
  struct _F10596 {
    T12 v3366;
    T13 v3367;
    T17 v3368;
    }
  function _reachi_0(T16 memory _a, Memory memory _Memory) internal  {
    _F10596 memory _f;
    reachRequire((! locked), uint256(17) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(18) /*'time check at ./index.rsh:59:12:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(19) /*'(./index.rsh:59:12:dot,[],"verify network token pay amount")'*/);
    _f.v3366._i = uint256(5);
    _f.v3366._scale = uint256(100);
    _f.v3367._i = _f.v3366;
    _f.v3367._sign = true;
    _f.v3368._bal = uint256(0);
    _f.v3368._keepGoing = true;
    _f.v3368._percent = _f.v3367;
    _f.v3368._total_amount_claimed = uint256(0);
    _f.v3368._total_rewards_allcoated = uint256(0);
    _f.v3368._total_users_claim = uint256(0);
    _f.v3368._usersNo = uint256(0);
    T18  memory _ja;
    _ja.elem0 = payable(msg.sender);
    _ja.elem1 = (_a.elem1);
    _ja.elem2 = _f.v3368;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = uint256(0);
    _reachl_1(_ja, _Memory);
    }
  struct _F10597 {
    T4 v3628;
    T17 v3714;
    T5 v4037;
    T17 v4149;
    T6 v4446;
    T17 v4589;
    T17 v5016;
    T4 v5264;
    T17 v5447;
    T8 v5673;
    bool v5716;
    uint256 v5721;
    T15 v5870;
    T1 v5872;
    T1 v5873;
    T1 v5879;
    uint256 v5902;
    T17 v5904;
    T9 v6082;
    uint256 v6135;
    T15 v6375;
    T1 v6377;
    T1 v6378;
    T1 v6386;
    T19 v6395;
    uint256 v6401;
    T17 v6418;
    T17 v6434;
    uint256 v6439;
    T17 v6456;
    T17 v6472;
    T17 v6898;
    }
  function _reachi_2(T11 memory _a, Memory memory _Memory) internal  {
    _F10597 memory _f;
    reachRequire((current_step == uint256(3)), uint256(20) /*'state check at ./index.rsh:79:37:dot'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    reachRequire((! locked), uint256(21) /*'locked'*/);
    emit _reach_e2(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(22) /*'time check at ./index.rsh:79:37:dot'*/);
    if ((_a.elem1).which == _enum_T10.Admin_addAdmin0_181) {
    _f.v3628 = (_a.elem1)._Admin_addAdmin0_181;
    reachRequire((((payable(msg.sender) == _svs.v3360) ? true : ((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(23) /*'(reach standard library:57:5:application,[at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:196:34:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "You Are unable to register another Admin")'*/);
    reachRequire((msg.value == uint256(0)), uint256(24) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    _reachm_2[(_f.v3628.elem0)].which = _enum_T3.Some;
    _reachm_2[(_f.v3628.elem0)]._Some = false;
    
    emit _reach_oe_v3700( (false));
    _Memory._reachr_Admin_addAdmin = (false);
    _f.v3714._bal = _svs.v3394;
    _f.v3714._keepGoing = _svs.v3395;
    _f.v3714._percent = _svs.v3396;
    _f.v3714._total_amount_claimed = _svs.v3397;
    _f.v3714._total_rewards_allcoated = _svs.v3398;
    _f.v3714._total_users_claim = _svs.v3399;
    _f.v3714._usersNo = _svs.v3400;
    T18  memory _ja;
    _ja.elem0 = _svs.v3360;
    _ja.elem1 = _svs.v3361;
    _ja.elem2 = _f.v3714;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v3373;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.Admin_deposit0_181) {
    _f.v4037 = (_a.elem1)._Admin_deposit0_181;
    reachRequire((((payable(msg.sender) == _svs.v3360) ? true : ((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(25) /*'(reach standard library:57:5:application,[at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:124:32:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "Only Admins can deposit")'*/);
    reachRequire((msg.value == (_f.v4037.elem0)), uint256(26) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v4134( (false));
    _Memory._reachr_Admin_deposit = (false);
    _f.v4149._bal = (safeAdd(_svs.v3394, (_f.v4037.elem0)));
    _f.v4149._keepGoing = _svs.v3395;
    _f.v4149._percent = _svs.v3396;
    _f.v4149._total_amount_claimed = _svs.v3397;
    _f.v4149._total_rewards_allcoated = _svs.v3398;
    _f.v4149._total_users_claim = _svs.v3399;
    _f.v4149._usersNo = _svs.v3400;
    T18  memory _ja;
    _ja.elem0 = _svs.v3360;
    _ja.elem1 = _svs.v3361;
    _ja.elem2 = _f.v4149;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = (unsafeAdd(_svs.v3373, (_f.v4037.elem0)));
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.Admin_editUserReward0_181) {
    _f.v4446 = (_a.elem1)._Admin_editUserReward0_181;
    reachRequire((((payable(msg.sender) == _svs.v3360) ? true : ((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(27) /*'(reach standard library:57:5:application,[at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "Only Admins can deposit")'*/);
    reachRequire((((_f.v4446.elem1) <= _svs.v3373)), uint256(28) /*'(reach standard library:57:5:application,[at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "Can only edit what is in the contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(29) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    _reachm_0[(_f.v4446.elem0)].which = _enum_T0.Some;
    _reachm_0[(_f.v4446.elem0)]._Some = (_f.v4446.elem1);
    
    emit _reach_oe_v4574( (false));
    _Memory._reachr_Admin_editUserReward = (false);
    _f.v4589._bal = _svs.v3394;
    _f.v4589._keepGoing = _svs.v3395;
    _f.v4589._percent = _svs.v3396;
    _f.v4589._total_amount_claimed = _svs.v3397;
    _f.v4589._total_rewards_allcoated = _svs.v3398;
    _f.v4589._total_users_claim = _svs.v3399;
    _f.v4589._usersNo = _svs.v3400;
    T18  memory _ja;
    _ja.elem0 = _svs.v3360;
    _ja.elem1 = _svs.v3361;
    _ja.elem2 = _f.v4589;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v3373;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.Admin_endContractAndTransfer0_181) {
    reachRequire(((_svs.v3360 == payable(msg.sender))), uint256(30) /*'(reach standard library:57:5:application,[at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:326:44:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "Cannot end contract without being Deployer")'*/);
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v5003( (false));
    _Memory._reachr_Admin_endContractAndTransfer = (false);
    _f.v5016._bal = _svs.v3394;
    _f.v5016._keepGoing = false;
    _f.v5016._percent = _svs.v3396;
    _f.v5016._total_amount_claimed = _svs.v3397;
    _f.v5016._total_rewards_allcoated = _svs.v3398;
    _f.v5016._total_users_claim = _svs.v3399;
    _f.v5016._usersNo = _svs.v3400;
    T18  memory _ja;
    _ja.elem0 = _svs.v3360;
    _ja.elem1 = _svs.v3361;
    _ja.elem2 = _f.v5016;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v3373;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.Admin_revokeAdmin0_181) {
    _f.v5264 = (_a.elem1)._Admin_revokeAdmin0_181;
    reachRequire(((payable(msg.sender) == _svs.v3360)), uint256(32) /*'(reach standard library:57:5:application,[at ./index.rsh:211:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:210:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "Only the Deployer can revoke Admin Rights")'*/);
    reachRequire((msg.value == uint256(0)), uint256(33) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    delete _reachm_2[(_f.v5264.elem0)];
    emit _reach_oe_v5433( (false));
    _Memory._reachr_Admin_revokeAdmin = (false);
    _f.v5447._bal = _svs.v3394;
    _f.v5447._keepGoing = _svs.v3395;
    _f.v5447._percent = _svs.v3396;
    _f.v5447._total_amount_claimed = _svs.v3397;
    _f.v5447._total_rewards_allcoated = _svs.v3398;
    _f.v5447._total_users_claim = _svs.v3399;
    _f.v5447._usersNo = _svs.v3400;
    T18  memory _ja;
    _ja.elem0 = _svs.v3360;
    _ja.elem1 = _svs.v3361;
    _ja.elem2 = _f.v5447;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v3373;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.Admin_setReward0_181) {
    _f.v5673 = (_a.elem1)._Admin_setReward0_181;
    _f.v5716 = (_f.v5673.elem2) > _svs.v3394;
    reachRequire((((uint256((__reachm_4Ref((_f.v5673.elem0))).which)) == uint256(1))), uint256(34) /*'(reach standard library:57:5:application,[at ./index.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:137:45:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "The user needs to opt in first")'*/);
    _f.v5721 = _f.v5716 ? (_f.v5673.elem2) : uint256(0);
    reachRequire((msg.value == _f.v5721), uint256(35) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    _f.v5870.elem0 = (_f.v5673.elem0);
    _f.v5870.elem1 = (_f.v5673.elem1);
    _f.v5872._claimed = uint256(0);
    _f.v5872._rewards = uint256(0);
    _f.v5873 = ((__reachm_1Ref(uint256(keccak256(abi.encode(_f.v5870))))).which == _enum_T2.Some ? (__reachm_1Ref(uint256(keccak256(abi.encode(_f.v5870)))))._Some : _f.v5872);
    _f.v5879._claimed = (_f.v5873._claimed);
    _f.v5879._rewards = (safeAdd((_f.v5873._rewards), (_f.v5673.elem2)));
    _reachm_1[uint256(keccak256(abi.encode(_f.v5870)))].which = _enum_T2.Some;
    _reachm_1[uint256(keccak256(abi.encode(_f.v5870)))]._Some = _f.v5879;
    
    _reachm_0[(_f.v5673.elem0)].which = _enum_T0.Some;
    _reachm_0[(_f.v5673.elem0)]._Some = (safeAdd((((__reachm_0Ref((_f.v5673.elem0))).which == _enum_T0.Some ? (__reachm_0Ref((_f.v5673.elem0)))._Some : uint256(0))), (_f.v5673.elem2)));
    
    emit _reach_oe_v5886( (true));
    _Memory._reachr_Admin_setReward = (true);
    if (_f.v5716) {
      _f.v5902 = (safeAdd(_svs.v3394, (_f.v5673.elem2)));
      }
    else {
      _f.v5902 = _svs.v3394;
      }
    _f.v5904._bal = _f.v5902;
    _f.v5904._keepGoing = _svs.v3395;
    _f.v5904._percent = _svs.v3396;
    _f.v5904._total_amount_claimed = _svs.v3397;
    _f.v5904._total_rewards_allcoated = _svs.v3398;
    _f.v5904._total_users_claim = _svs.v3399;
    _f.v5904._usersNo = _svs.v3400;
    T18  memory _ja;
    _ja.elem0 = _svs.v3360;
    _ja.elem1 = _svs.v3361;
    _ja.elem2 = _f.v5904;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = (unsafeAdd(_svs.v3373, _f.v5721));
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_claim0_181) {
    _f.v6082 = (_a.elem1)._User_claim0_181;
    _f.v6135 = ((__reachm_0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachm_0Ref(payable(msg.sender)))._Some : uint256(0));
    reachRequire((((_f.v6082.elem0) <= _svs.v3373)), uint256(36) /*'(reach standard library:57:5:application,[at ./index.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "Cannot withdraw less than balance")'*/);
    reachRequire(((_f.v6135 >= (_f.v6082.elem0))), uint256(37) /*'(reach standard library:57:5:application,[at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp),at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)],Just "Cannot withdraw less than allocated")'*/);
    reachRequire((msg.value == uint256(0)), uint256(38) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    _f.v6375.elem0 = payable(msg.sender);
    _f.v6375.elem1 = (_f.v6082.elem1);
    _f.v6377._claimed = uint256(0);
    _f.v6377._rewards = uint256(0);
    _f.v6378 = ((__reachm_1Ref(uint256(keccak256(abi.encode(_f.v6375))))).which == _enum_T2.Some ? (__reachm_1Ref(uint256(keccak256(abi.encode(_f.v6375)))))._Some : _f.v6377);
    _f.v6386._claimed = (safeAdd((_f.v6378._claimed), (_f.v6082.elem0)));
    _f.v6386._rewards = (safeSub((_f.v6378._rewards), (_f.v6082.elem0)));
    _reachm_1[uint256(keccak256(abi.encode(_f.v6375)))].which = _enum_T2.Some;
    _reachm_1[uint256(keccak256(abi.encode(_f.v6375)))]._Some = _f.v6386;
    
    emit _reach_oe_v6387( (true));
    _Memory._reachr_User_claim = (true);
    _f.v6395.addr = payable(msg.sender);
    _f.v6395.amount = (_f.v6082.elem0);
    _f.v6395.projectName = _svs.v3361;
    emit claimed( _f.v6395);
    if (((uint256((__reachm_3Ref(payable(msg.sender))).which)) == uint256(1))) {
      _f.v6439 = unsafeSub(_svs.v3373, (_f.v6082.elem0));
      payable(msg.sender).transfer((_f.v6082.elem0));
      if ((_f.v6135 == uint256(0))) {
        delete _reachm_0[payable(msg.sender)];
        _f.v6456._bal = (safeSub(_svs.v3394, (_f.v6082.elem0)));
        _f.v6456._keepGoing = _svs.v3395;
        _f.v6456._percent = _svs.v3396;
        _f.v6456._total_amount_claimed = (safeAdd(_svs.v3397, (_f.v6082.elem0)));
        _f.v6456._total_rewards_allcoated = _svs.v3398;
        _f.v6456._total_users_claim = (safeAdd(_svs.v3399, uint256(1)));
        _f.v6456._usersNo = (safeAdd(_svs.v3400, uint256(1)));
        T18  memory _ja;
        _ja.elem0 = _svs.v3360;
        _ja.elem1 = _svs.v3361;
        _ja.elem2 = _f.v6456;
        _ja.elem3 = uint256(block.number);
        _ja.elem4 = _f.v6439;
        _reachl_1(_ja, _Memory);
        }
      else {
        _reachm_0[payable(msg.sender)].which = _enum_T0.Some;
        _reachm_0[payable(msg.sender)]._Some = (safeSub(_f.v6135, (_f.v6082.elem0)));
        
        _f.v6472._bal = (safeSub(_svs.v3394, (_f.v6082.elem0)));
        _f.v6472._keepGoing = _svs.v3395;
        _f.v6472._percent = _svs.v3396;
        _f.v6472._total_amount_claimed = (safeAdd(_svs.v3397, (_f.v6082.elem0)));
        _f.v6472._total_rewards_allcoated = _svs.v3398;
        _f.v6472._total_users_claim = (safeAdd(_svs.v3399, uint256(1)));
        _f.v6472._usersNo = (safeAdd(_svs.v3400, uint256(1)));
        T18  memory _ja;
        _ja.elem0 = _svs.v3360;
        _ja.elem1 = _svs.v3361;
        _ja.elem2 = _f.v6472;
        _ja.elem3 = uint256(block.number);
        _ja.elem4 = _f.v6439;
        _reachl_1(_ja, _Memory);
        }
      }
    else {
      _reachm_3[payable(msg.sender)].which = _enum_T3.Some;
      _reachm_3[payable(msg.sender)]._Some = false;
      
      _f.v6401 = unsafeSub(_svs.v3373, (_f.v6082.elem0));
      payable(msg.sender).transfer((_f.v6082.elem0));
      if ((_f.v6135 == uint256(0))) {
        delete _reachm_0[payable(msg.sender)];
        _f.v6418._bal = (safeSub(_svs.v3394, (_f.v6082.elem0)));
        _f.v6418._keepGoing = _svs.v3395;
        _f.v6418._percent = _svs.v3396;
        _f.v6418._total_amount_claimed = (safeAdd(_svs.v3397, (_f.v6082.elem0)));
        _f.v6418._total_rewards_allcoated = _svs.v3398;
        _f.v6418._total_users_claim = (safeAdd(_svs.v3399, uint256(1)));
        _f.v6418._usersNo = _svs.v3400;
        T18  memory _ja;
        _ja.elem0 = _svs.v3360;
        _ja.elem1 = _svs.v3361;
        _ja.elem2 = _f.v6418;
        _ja.elem3 = uint256(block.number);
        _ja.elem4 = _f.v6401;
        _reachl_1(_ja, _Memory);
        }
      else {
        _reachm_0[payable(msg.sender)].which = _enum_T0.Some;
        _reachm_0[payable(msg.sender)]._Some = (safeSub(_f.v6135, (_f.v6082.elem0)));
        
        _f.v6434._bal = (safeSub(_svs.v3394, (_f.v6082.elem0)));
        _f.v6434._keepGoing = _svs.v3395;
        _f.v6434._percent = _svs.v3396;
        _f.v6434._total_amount_claimed = (safeAdd(_svs.v3397, (_f.v6082.elem0)));
        _f.v6434._total_rewards_allcoated = _svs.v3398;
        _f.v6434._total_users_claim = (safeAdd(_svs.v3399, uint256(1)));
        _f.v6434._usersNo = _svs.v3400;
        T18  memory _ja;
        _ja.elem0 = _svs.v3360;
        _ja.elem1 = _svs.v3361;
        _ja.elem2 = _f.v6434;
        _ja.elem3 = uint256(block.number);
        _ja.elem4 = _f.v6401;
        _reachl_1(_ja, _Memory);
        }
      }
    } else if ((_a.elem1).which == _enum_T10.User_optin0_181) {
    reachRequire((msg.value == uint256(0)), uint256(39) /*'(./index.rsh:79:37:dot,[],"verify network token pay amount")'*/);
    _reachm_4[payable(msg.sender)].which = _enum_T3.Some;
    _reachm_4[payable(msg.sender)]._Some = false;
    
    emit _reach_oe_v6885( (false));
    _Memory._reachr_User_optin = (false);
    _f.v6898._bal = _svs.v3394;
    _f.v6898._keepGoing = _svs.v3395;
    _f.v6898._percent = _svs.v3396;
    _f.v6898._total_amount_claimed = _svs.v3397;
    _f.v6898._total_rewards_allcoated = _svs.v3398;
    _f.v6898._total_users_claim = _svs.v3399;
    _f.v6898._usersNo = _svs.v3400;
    T18  memory _ja;
    _ja.elem0 = _svs.v3360;
    _ja.elem1 = _svs.v3361;
    _ja.elem2 = _f.v6898;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v3373;
    _reachl_1(_ja, _Memory);
    }
    }
  struct _F10599 {
    uint256 v6939;
    }
  function _reachl_1(T18 memory _a, Memory memory _Memory) internal  {
    _F10599 memory _f;
    if ((_a.elem2._keepGoing)) {
      T14 memory nsvs;
      nsvs.v3360 = _a.elem0;
      nsvs.v3361 = _a.elem1;
      nsvs.v3373 = _a.elem4;
      nsvs.v3394 = (_a.elem2._bal);
      nsvs.v3395 = (_a.elem2._keepGoing);
      nsvs.v3396 = (_a.elem2._percent);
      nsvs.v3397 = (_a.elem2._total_amount_claimed);
      nsvs.v3398 = (_a.elem2._total_rewards_allcoated);
      nsvs.v3399 = (_a.elem2._total_users_claim);
      nsvs.v3400 = (_a.elem2._usersNo);
      current_step = uint256(3);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem0.transfer(_a.elem4);
      {
        uint256 v10598 = address(this).balance;
        _f.v6939 = v10598 < (unsafeSub(_a.elem4, _a.elem4)) ? uint256(0) : unsafeSub(v10598, (unsafeSub(_a.elem4, _a.elem4)));
        }
      _a.elem0.transfer(_f.v6939);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Admin_addAdmin(address payable v10525) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_addAdmin(v10525, _Memory);
    return _Memory._reachr_Admin_addAdmin;
    }
  function Admin_deposit(uint256 v10531) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_deposit(v10531, _Memory);
    return _Memory._reachr_Admin_deposit;
    }
  function Admin_editUserReward(address payable v10538, uint256 v10539) external payable returns (bool) {
    Memory memory _Memory;
    T6  memory _ja;
    _ja.elem0 = v10538;
    _ja.elem1 = v10539;
    _reacha_Admin_editUserReward(_ja, _Memory);
    return _Memory._reachr_Admin_editUserReward;
    }
  function Admin_endContractAndTransfer() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Admin_endContractAndTransfer(_ja, _Memory);
    return _Memory._reachr_Admin_endContractAndTransfer;
    }
  function Admin_revokeAdmin(address payable v10549) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_revokeAdmin(v10549, _Memory);
    return _Memory._reachr_Admin_revokeAdmin;
    }
  function Admin_setReward(address payable v10557, address payable v10558, uint256 v10559) external payable returns (bool) {
    Memory memory _Memory;
    T8  memory _ja;
    _ja.elem0 = v10557;
    _ja.elem1 = v10558;
    _ja.elem2 = v10559;
    _reacha_Admin_setReward(_ja, _Memory);
    return _Memory._reachr_Admin_setReward;
    }
  function Info_Admins(address payable v10489) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_Admins(v10489, _Memory);
    return _Memory._reachr_Info_Admins;
    }
  function Info_balance() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_balance(_ja, _Memory);
    return _Memory._reachr_Info_balance;
    }
  function Info_claimed(address payable v10496, address payable v10497) external view returns (uint256) {
    Memory memory _Memory;
    T15  memory _ja;
    _ja.elem0 = v10496;
    _ja.elem1 = v10497;
    _reacha_Info_claimed(_ja, _Memory);
    return _Memory._reachr_Info_claimed;
    }
  function Info_opted(address payable v10501) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_opted(v10501, _Memory);
    return _Memory._reachr_Info_opted;
    }
  function Info_totalAllocatedFunds() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalAllocatedFunds(_ja, _Memory);
    return _Memory._reachr_Info_totalAllocatedFunds;
    }
  function Info_totalAmountClaimed() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalAmountClaimed(_ja, _Memory);
    return _Memory._reachr_Info_totalAmountClaimed;
    }
  function Info_totalClaimed() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalClaimed(_ja, _Memory);
    return _Memory._reachr_Info_totalClaimed;
    }
  function Info_totalOptedIn() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalOptedIn(_ja, _Memory);
    return _Memory._reachr_Info_totalOptedIn;
    }
  function Info_totalRewards(address payable v10513) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_Info_totalRewards(v10513, _Memory);
    return _Memory._reachr_Info_totalRewards;
    }
  function Info_userReward(address payable v10518, address payable v10519) external view returns (uint256) {
    Memory memory _Memory;
    T15  memory _ja;
    _ja.elem0 = v10518;
    _ja.elem1 = v10519;
    _reacha_Info_userReward(_ja, _Memory);
    return _Memory._reachr_Info_userReward;
    }
  function User_claim(uint256 v10566, address payable v10567) external payable returns (bool) {
    Memory memory _Memory;
    T9  memory _ja;
    _ja.elem0 = v10566;
    _ja.elem1 = v10567;
    _reacha_User_claim(_ja, _Memory);
    return _Memory._reachr_User_claim;
    }
  function User_optin() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_optin(_ja, _Memory);
    return _Memory._reachr_User_optin;
    }
  constructor(T16 memory v10574) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v10574, _Memory);
    }
  function _reachp_2(T11 calldata v10577) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_2(v10577, _Memory);
    }
  }
