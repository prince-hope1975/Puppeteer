// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc3 = stdlib.T_Struct([['addr', ctc0], ['amount', ctc1], ['projectName', ctc2]]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  return {
    claimed: [ctc3],
    insufficient: [ctc1],
    newReward: [ctc0, ctc4],
    notify: [ctc5, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    i: ctc2,
    scale: ctc2
    });
  const ctc5 = stdlib.T_Object({
    i: ctc4,
    sign: ctc3
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Object({
    claimed: ctc2,
    rewards: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Data({
    None: ctc6,
    Some: ctc9
    });
  const ctc12 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc11;
  
  const map2_ctc = ctc12;
  
  const map3_ctc = ctc12;
  
  const map4_ctc = ctc12;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async (_v3404 ) => {
          const v3404 = stdlib.protect(ctc0, _v3404, null);
        
        const v3405 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v3404, ctc6), null);
        const v3406 = {
          None: 0,
          Some: 1
          }[v3405[0]];
        const v3407 = stdlib.eq(v3406, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3407;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async () => {
        
        
        return v3373;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async (_v3420, _v3421 ) => {
          const v3420 = stdlib.protect(ctc0, _v3420, null);
          const v3421 = stdlib.protect(ctc7, _v3421, null);
        
        const v3422 = [v3420, v3421];
        const v3423 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v3422, ctc9), null);
        const v3424 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3425 = stdlib.fromSome(v3423, v3424);
        const v3426 = v3425.claimed;
        
        return v3426;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async (_v3408 ) => {
          const v3408 = stdlib.protect(ctc0, _v3408, null);
        
        const v3409 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v3408, ctc6), null);
        const v3410 = {
          None: 0,
          Some: 1
          }[v3409[0]];
        const v3411 = stdlib.eq(v3410, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3411;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async () => {
        
        
        return v3398;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async () => {
        
        
        return v3397;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async () => {
        
        
        return v3399;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async () => {
        
        
        return v3400;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async (_v3401 ) => {
          const v3401 = stdlib.protect(ctc0, _v3401, null);
        
        const v3402 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3401, ctc2), null);
        const v3403 = stdlib.fromSome(v3402, stdlib.checkedBigNumberify('./index.rsh:100:58:decimal', stdlib.UInt_max, '0'));
        
        return v3403;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = svs;
      return (await ((async (_v3413, _v3414 ) => {
          const v3413 = stdlib.protect(ctc0, _v3413, null);
          const v3414 = stdlib.protect(ctc7, _v3414, null);
        
        const v3415 = [v3413, v3414];
        const v3416 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v3415, ctc9), null);
        const v3417 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3418 = stdlib.fromSome(v3416, v3417);
        const v3419 = v3418.rewards;
        
        return v3419;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        Admins: {
          decode: Info_Admins,
          dom: [ctc0],
          rng: ctc3
          },
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc2
          },
        claimed: {
          decode: Info_claimed,
          dom: [ctc0, ctc7],
          rng: ctc2
          },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc3
          },
        totalAllocatedFunds: {
          decode: Info_totalAllocatedFunds,
          dom: [],
          rng: ctc2
          },
        totalAmountClaimed: {
          decode: Info_totalAmountClaimed,
          dom: [],
          rng: ctc2
          },
        totalClaimed: {
          decode: Info_totalClaimed,
          dom: [],
          rng: ctc2
          },
        totalOptedIn: {
          decode: Info_totalOptedIn,
          dom: [],
          rng: ctc2
          },
        totalRewards: {
          decode: Info_totalRewards,
          dom: [ctc0],
          rng: ctc2
          },
        userReward: {
          decode: Info_userReward,
          dom: [ctc0, ctc7],
          rng: ctc2
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc5, ctc2, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc5, ctc5, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function _Admin_addAdmin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_addAdmin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_addAdmin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc11,
    Admin_deposit0_181: ctc12,
    Admin_editUserReward0_181: ctc13,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc11,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3495 = ctc.selfAddress();
  const v3497 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:196:34:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_addAdmin0_181" (defined at: ./index.rsh:196:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v3500 = stdlib.addressEq(v3495, v3360);
  const v3501 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3495, ctc0), null);
  const v3502 = {
    None: 0,
    Some: 1
    }[v3501[0]];
  const v3503 = stdlib.eq(v3502, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3504 = v3500 ? true : v3503;
  stdlib.assert(v3504, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:34:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_addAdmin0_181" (defined at: ./index.rsh:196:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v3511 = ['Admin_addAdmin0_181', v3497];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3511],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:202:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3624, ctc0), null);
          ;
          const v3691 = v3628[stdlib.checkedBigNumberify('./index.rsh:196:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v3691, ctc0, null);
          const v3700 = null;
          const v3701 = await txn1.getOutput('Admin_addAdmin', 'v3700', ctc0, v3700);
          
          const v3714 = {
            bal: v3394,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v3397,
            total_rewards_allcoated: v3398,
            total_users_claim: v3399,
            usersNo: v3400
            };
          const v8992 = v3373;
          const v8993 = v3714.keepGoing;
          if (v8993) {
            const v8994 = v3714.bal;
            const v8996 = v3714.percent;
            const v8997 = v3714.total_amount_claimed;
            const v8998 = v3714.total_rewards_allcoated;
            const v8999 = v3714.total_users_claim;
            const v9000 = v3714.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9005 = stdlib.sub(v3373, v3373);
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            const v9006 = (stdlib.le(await ctc.getBalance(), v9005) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9005));
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      undefined /* setApiDetails */;
      const v3634 = stdlib.addressEq(v3624, v3360);
      const v3635 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3624, ctc0), null);
      const v3636 = {
        None: 0,
        Some: 1
        }[v3635[0]];
      const v3637 = stdlib.eq(v3636, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3638 = v3634 ? true : v3637;
      stdlib.assert(v3638, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:34:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      const v3691 = v3628[stdlib.checkedBigNumberify('./index.rsh:196:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v3691, ctc0, null);
      const v3700 = null;
      const v3701 = await txn1.getOutput('Admin_addAdmin', 'v3700', ctc0, v3700);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v3628, v3701), {
          at: './index.rsh:196:11:application',
          fs: ['at ./index.rsh:196:11:application call to [unknown function] (defined at: ./index.rsh:196:11:function exp)', 'at ./index.rsh:205:14:application call to "ret" (defined at: ./index.rsh:203:15:function exp)', 'at ./index.rsh:203:15:application call to [unknown function] (defined at: ./index.rsh:203:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v3714 = {
        bal: v3394,
        keepGoing: v3395,
        percent: v3396,
        total_amount_claimed: v3397,
        total_rewards_allcoated: v3398,
        total_users_claim: v3399,
        usersNo: v3400
        };
      const v8992 = v3373;
      const v8993 = v3714.keepGoing;
      if (v8993) {
        const v8994 = v3714.bal;
        const v8996 = v3714.percent;
        const v8997 = v3714.total_amount_claimed;
        const v8998 = v3714.total_rewards_allcoated;
        const v8999 = v3714.total_users_claim;
        const v9000 = v3714.usersNo;
        return;
        }
      else {
        const v9005 = stdlib.sub(v3373, v3373);
        ;
        const v9006 = (stdlib.le(await ctc.getBalance(), v9005) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9005));
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc11,
    Admin_editUserReward0_181: ctc13,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3427 = ctc.selfAddress();
  const v3429 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:124:32:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_deposit0_181" (defined at: ./index.rsh:124:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v3430 = v3429[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3432 = stdlib.addressEq(v3427, v3360);
  const v3433 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3427, ctc0), null);
  const v3434 = {
    None: 0,
    Some: 1
    }[v3433[0]];
  const v3435 = stdlib.eq(v3434, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3436 = v3432 ? true : v3435;
  stdlib.assert(v3436, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:32:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_deposit0_181" (defined at: ./index.rsh:124:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v3443 = ['Admin_deposit0_181', v3429];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3443],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3430, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v4050 = v4037[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3624, ctc0), null);
          const v4098 = stdlib.add(v3373, v4050);
          sim_r.txns.push({
            amt: v4050,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4134 = null;
          const v4135 = await txn1.getOutput('Admin_deposit', 'v4134', ctc0, v4134);
          
          const v4148 = stdlib.safeAdd(v3394, v4050);
          const v4149 = {
            bal: v4148,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v3397,
            total_rewards_allcoated: v3398,
            total_users_claim: v3399,
            usersNo: v3400
            };
          const v9196 = v4098;
          const v9197 = v4149.keepGoing;
          if (v9197) {
            const v9198 = v4149.bal;
            const v9200 = v4149.percent;
            const v9201 = v4149.total_amount_claimed;
            const v9202 = v4149.total_rewards_allcoated;
            const v9203 = v4149.total_users_claim;
            const v9204 = v4149.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9209 = stdlib.sub(v4098, v4098);
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            const v9210 = (stdlib.le(await ctc.getBalance(), v9209) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9209));
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      undefined /* setApiDetails */;
      const v4050 = v4037[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '0')];
      const v4051 = stdlib.addressEq(v3624, v3360);
      const v4052 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3624, ctc0), null);
      const v4053 = {
        None: 0,
        Some: 1
        }[v4052[0]];
      const v4054 = stdlib.eq(v4053, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4055 = v4051 ? true : v4054;
      stdlib.assert(v4055, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:32:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      const v4098 = stdlib.add(v3373, v4050);
      ;
      const v4134 = null;
      const v4135 = await txn1.getOutput('Admin_deposit', 'v4134', ctc0, v4134);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v4037, v4135), {
          at: './index.rsh:124:11:application',
          fs: ['at ./index.rsh:124:11:application call to [unknown function] (defined at: ./index.rsh:124:11:function exp)', 'at ./index.rsh:129:14:application call to "ret" (defined at: ./index.rsh:128:15:function exp)', 'at ./index.rsh:128:15:application call to [unknown function] (defined at: ./index.rsh:128:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v4148 = stdlib.safeAdd(v3394, v4050);
      const v4149 = {
        bal: v4148,
        keepGoing: v3395,
        percent: v3396,
        total_amount_claimed: v3397,
        total_rewards_allcoated: v3398,
        total_users_claim: v3399,
        usersNo: v3400
        };
      const v9196 = v4098;
      const v9197 = v4149.keepGoing;
      if (v9197) {
        const v9198 = v4149.bal;
        const v9200 = v4149.percent;
        const v9201 = v4149.total_amount_claimed;
        const v9202 = v4149.total_rewards_allcoated;
        const v9203 = v4149.total_users_claim;
        const v9204 = v4149.usersNo;
        return;
        }
      else {
        const v9209 = stdlib.sub(v4098, v4098);
        ;
        const v9210 = (stdlib.le(await ctc.getBalance(), v9209) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9209));
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_editUserReward3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_editUserReward3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_editUserReward3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc13,
    Admin_editUserReward0_181: ctc11,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3470 = ctc.selfAddress();
  const v3472 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_editUserReward0_181" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v3474 = v3472[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3477 = stdlib.addressEq(v3470, v3360);
  const v3478 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3470, ctc0), null);
  const v3479 = {
    None: 0,
    Some: 1
    }[v3478[0]];
  const v3480 = stdlib.eq(v3479, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3481 = v3477 ? true : v3480;
  stdlib.assert(v3481, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_editUserReward0_181" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v3484 = stdlib.le(v3474, v3373);
  stdlib.assert(v3484, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_editUserReward0_181" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v3493 = ['Admin_editUserReward0_181', v3472];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3493],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:188:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v4468 = v4446[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v3624, ctc0), null);
          ;
          const v4561 = v4446[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v4561, ctc1, v4468);
          const v4574 = null;
          const v4575 = await txn1.getOutput('Admin_editUserReward', 'v4574', ctc0, v4574);
          
          const v4589 = {
            bal: v3394,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v3397,
            total_rewards_allcoated: v3398,
            total_users_claim: v3399,
            usersNo: v3400
            };
          const v9400 = v3373;
          const v9401 = v4589.keepGoing;
          if (v9401) {
            const v9402 = v4589.bal;
            const v9404 = v4589.percent;
            const v9405 = v4589.total_amount_claimed;
            const v9406 = v4589.total_rewards_allcoated;
            const v9407 = v4589.total_users_claim;
            const v9408 = v4589.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9413 = stdlib.sub(v3373, v3373);
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            const v9414 = (stdlib.le(await ctc.getBalance(), v9413) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9413));
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      undefined /* setApiDetails */;
      const v4468 = v4446[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
      const v4469 = stdlib.addressEq(v3624, v3360);
      const v4470 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v3624, ctc0), null);
      const v4471 = {
        None: 0,
        Some: 1
        }[v4470[0]];
      const v4472 = stdlib.eq(v4471, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4473 = v4469 ? true : v4472;
      stdlib.assert(v4473, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v4476 = stdlib.le(v4468, v3373);
      stdlib.assert(v4476, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      const v4561 = v4446[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v4561, ctc1, v4468);
      const v4574 = null;
      const v4575 = await txn1.getOutput('Admin_editUserReward', 'v4574', ctc0, v4574);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v4446, v4575), {
          at: './index.rsh:184:11:application',
          fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:11:function exp)', 'at ./index.rsh:191:14:application call to "ret" (defined at: ./index.rsh:189:15:function exp)', 'at ./index.rsh:189:15:application call to [unknown function] (defined at: ./index.rsh:189:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v4589 = {
        bal: v3394,
        keepGoing: v3395,
        percent: v3396,
        total_amount_claimed: v3397,
        total_rewards_allcoated: v3398,
        total_users_claim: v3399,
        usersNo: v3400
        };
      const v9400 = v3373;
      const v9401 = v4589.keepGoing;
      if (v9401) {
        const v9402 = v4589.bal;
        const v9404 = v4589.percent;
        const v9405 = v4589.total_amount_claimed;
        const v9406 = v4589.total_rewards_allcoated;
        const v9407 = v4589.total_users_claim;
        const v9408 = v4589.usersNo;
        return;
        }
      else {
        const v9413 = stdlib.sub(v3373, v3373);
        ;
        const v9414 = (stdlib.le(await ctc.getBalance(), v9413) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9413));
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_endContractAndTransfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_endContractAndTransfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_endContractAndTransfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc13,
    Admin_editUserReward0_181: ctc14,
    Admin_endContractAndTransfer0_181: ctc11,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc11
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3558 = ctc.selfAddress();
  const v3560 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:326:44:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_endContractAndTransfer0_181" (defined at: ./index.rsh:326:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v3561 = stdlib.addressEq(v3360, v3558);
  stdlib.assert(v3561, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:326:44:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_endContractAndTransfer0_181" (defined at: ./index.rsh:326:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v3566 = ['Admin_endContractAndTransfer0_181', v3560];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3566],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:329:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          const v5003 = null;
          const v5004 = await txn1.getOutput('Admin_endContractAndTransfer', 'v5003', ctc0, v5003);
          
          const v5016 = {
            bal: v3394,
            keepGoing: false,
            percent: v3396,
            total_amount_claimed: v3397,
            total_rewards_allcoated: v3398,
            total_users_claim: v3399,
            usersNo: v3400
            };
          const v9604 = v3373;
          const v9605 = v5016.keepGoing;
          if (v9605) {
            const v9606 = v5016.bal;
            const v9608 = v5016.percent;
            const v9609 = v5016.total_amount_claimed;
            const v9610 = v5016.total_rewards_allcoated;
            const v9611 = v5016.total_users_claim;
            const v9612 = v5016.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9617 = stdlib.sub(v3373, v3373);
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            const v9618 = (stdlib.le(await ctc.getBalance(), v9617) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9617));
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      undefined /* setApiDetails */;
      const v4888 = stdlib.addressEq(v3360, v3624);
      stdlib.assert(v4888, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:326:44:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      const v5003 = null;
      const v5004 = await txn1.getOutput('Admin_endContractAndTransfer', 'v5003', ctc0, v5003);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v4855, v5004), {
          at: './index.rsh:326:11:application',
          fs: ['at ./index.rsh:326:11:application call to [unknown function] (defined at: ./index.rsh:326:11:function exp)', 'at ./index.rsh:331:14:application call to "ret" (defined at: ./index.rsh:330:15:function exp)', 'at ./index.rsh:330:15:application call to [unknown function] (defined at: ./index.rsh:330:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v5016 = {
        bal: v3394,
        keepGoing: false,
        percent: v3396,
        total_amount_claimed: v3397,
        total_rewards_allcoated: v3398,
        total_users_claim: v3399,
        usersNo: v3400
        };
      const v9604 = v3373;
      const v9605 = v5016.keepGoing;
      if (v9605) {
        const v9606 = v5016.bal;
        const v9608 = v5016.percent;
        const v9609 = v5016.total_amount_claimed;
        const v9610 = v5016.total_rewards_allcoated;
        const v9611 = v5016.total_users_claim;
        const v9612 = v5016.usersNo;
        return;
        }
      else {
        const v9617 = stdlib.sub(v3373, v3373);
        ;
        const v9618 = (stdlib.le(await ctc.getBalance(), v9617) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9617));
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_revokeAdmin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_revokeAdmin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_revokeAdmin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc11,
    Admin_deposit0_181: ctc12,
    Admin_editUserReward0_181: ctc13,
    Admin_endContractAndTransfer0_181: ctc14,
    Admin_revokeAdmin0_181: ctc11,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3513 = ctc.selfAddress();
  const v3515 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:210:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_revokeAdmin0_181" (defined at: ./index.rsh:210:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v3518 = stdlib.addressEq(v3513, v3360);
  stdlib.assert(v3518, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:211:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:210:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_revokeAdmin0_181" (defined at: ./index.rsh:210:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v3525 = ['Admin_revokeAdmin0_181', v3515];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3525],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:213:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          const v5428 = v5264[stdlib.checkedBigNumberify('./index.rsh:210:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v5428, ctc0, undefined /* Nothing */);
          const v5433 = null;
          const v5434 = await txn1.getOutput('Admin_revokeAdmin', 'v5433', ctc0, v5433);
          
          const v5447 = {
            bal: v3394,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v3397,
            total_rewards_allcoated: v3398,
            total_users_claim: v3399,
            usersNo: v3400
            };
          const v9808 = v3373;
          const v9809 = v5447.keepGoing;
          if (v9809) {
            const v9810 = v5447.bal;
            const v9812 = v5447.percent;
            const v9813 = v5447.total_amount_claimed;
            const v9814 = v5447.total_rewards_allcoated;
            const v9815 = v5447.total_users_claim;
            const v9816 = v5447.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v9821 = stdlib.sub(v3373, v3373);
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            const v9822 = (stdlib.le(await ctc.getBalance(), v9821) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9821));
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      undefined /* setApiDetails */;
      const v5301 = stdlib.addressEq(v3624, v3360);
      stdlib.assert(v5301, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:211:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:210:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      const v5428 = v5264[stdlib.checkedBigNumberify('./index.rsh:210:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v5428, ctc0, undefined /* Nothing */);
      const v5433 = null;
      const v5434 = await txn1.getOutput('Admin_revokeAdmin', 'v5433', ctc0, v5433);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v5264, v5434), {
          at: './index.rsh:210:11:application',
          fs: ['at ./index.rsh:210:11:application call to [unknown function] (defined at: ./index.rsh:210:11:function exp)', 'at ./index.rsh:216:14:application call to "ret" (defined at: ./index.rsh:214:15:function exp)', 'at ./index.rsh:214:15:application call to [unknown function] (defined at: ./index.rsh:214:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5447 = {
        bal: v3394,
        keepGoing: v3395,
        percent: v3396,
        total_amount_claimed: v3397,
        total_rewards_allcoated: v3398,
        total_users_claim: v3399,
        usersNo: v3400
        };
      const v9808 = v3373;
      const v9809 = v5447.keepGoing;
      if (v9809) {
        const v9810 = v5447.bal;
        const v9812 = v5447.percent;
        const v9813 = v5447.total_amount_claimed;
        const v9814 = v5447.total_rewards_allcoated;
        const v9815 = v5447.total_users_claim;
        const v9816 = v5447.usersNo;
        return;
        }
      else {
        const v9821 = stdlib.sub(v3373, v3373);
        ;
        const v9822 = (stdlib.le(await ctc.getBalance(), v9821) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v9821));
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_setReward3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_setReward3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_setReward3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Tuple([ctc6, ctc11, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc13,
    Admin_deposit0_181: ctc14,
    Admin_editUserReward0_181: ctc15,
    Admin_endContractAndTransfer0_181: ctc16,
    Admin_revokeAdmin0_181: ctc13,
    Admin_setReward0_181: ctc12,
    User_claim0_181: ctc17,
    User_optin0_181: ctc16
    });
  const ctc19 = stdlib.T_Tuple([ctc6, ctc11]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3447 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:137:45:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_setReward0_181" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v3448 = v3447[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3450 = v3447[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3454 = stdlib.gt(v3450, v3394);
  const v3455 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v3448, ctc0), null);
  const v3456 = {
    None: 0,
    Some: 1
    }[v3455[0]];
  const v3457 = stdlib.eq(v3456, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3457, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:45:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp)', 'at ./index.rsh:79:37:application call to "runAdmin_setReward0_181" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v3468 = ['Admin_setReward0_181', v3447];
  
  const v3612 = v3454 ? v3450 : stdlib.checkedBigNumberify('./index.rsh:143:30:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3468],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3612, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v5713 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
          const v5715 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '2')];
          const v5716 = stdlib.gt(v5715, v3394);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v5713, ctc0), null);
          const v5721 = v5716 ? v5715 : stdlib.checkedBigNumberify('./index.rsh:143:30:decimal', stdlib.UInt_max, '0');
          const v5734 = stdlib.add(v3373, v5721);
          sim_r.txns.push({
            amt: v5721,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5860 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
          const v5870 = [v5713, v5860];
          const v5871 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v5870, ctc3), null);
          const v5872 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5873 = stdlib.fromSome(v5871, v5872);
          const v5875 = v5873.claimed;
          const v5876 = v5873.rewards;
          const v5878 = stdlib.safeAdd(v5876, v5715);
          const v5879 = {
            claimed: v5875,
            rewards: v5878
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v5870, ctc3, v5879);
          const v5880 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5713, ctc1), null);
          const v5881 = stdlib.fromSome(v5880, stdlib.checkedBigNumberify('./index.rsh:153:60:decimal', stdlib.UInt_max, '0'));
          const v5885 = stdlib.safeAdd(v5881, v5715);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5713, ctc1, v5885);
          const v5886 = true;
          const v5887 = await txn1.getOutput('Admin_setReward', 'v5886', ctc8, v5886);
          
          let v5902;
          if (v5716) {
            const v5903 = stdlib.safeAdd(v3394, v5715);
            v5902 = v5903;
            }
          else {
            v5902 = v3394;
            }
          const v5904 = {
            bal: v5902,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v3397,
            total_rewards_allcoated: v3398,
            total_users_claim: v3399,
            usersNo: v3400
            };
          const v10012 = v5734;
          const v10013 = v5904.keepGoing;
          if (v10013) {
            const v10014 = v5904.bal;
            const v10016 = v5904.percent;
            const v10017 = v5904.total_amount_claimed;
            const v10018 = v5904.total_rewards_allcoated;
            const v10019 = v5904.total_users_claim;
            const v10020 = v5904.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v10025 = stdlib.sub(v5734, v5734);
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            const v10026 = (stdlib.le(await ctc.getBalance(), v10025) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10025));
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      undefined /* setApiDetails */;
      const v5713 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
      const v5715 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '2')];
      const v5716 = stdlib.gt(v5715, v3394);
      const v5717 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v5713, ctc0), null);
      const v5718 = {
        None: 0,
        Some: 1
        }[v5717[0]];
      const v5719 = stdlib.eq(v5718, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5719, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:45:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v5721 = v5716 ? v5715 : stdlib.checkedBigNumberify('./index.rsh:143:30:decimal', stdlib.UInt_max, '0');
      const v5734 = stdlib.add(v3373, v5721);
      ;
      const v5860 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
      const v5870 = [v5713, v5860];
      const v5871 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v5870, ctc3), null);
      const v5872 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5873 = stdlib.fromSome(v5871, v5872);
      const v5875 = v5873.claimed;
      const v5876 = v5873.rewards;
      const v5878 = stdlib.safeAdd(v5876, v5715);
      const v5879 = {
        claimed: v5875,
        rewards: v5878
        };
      await stdlib.mapSet(map1, ctc19, v5870, ctc3, v5879);
      const v5880 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5713, ctc1), null);
      const v5881 = stdlib.fromSome(v5880, stdlib.checkedBigNumberify('./index.rsh:153:60:decimal', stdlib.UInt_max, '0'));
      const v5885 = stdlib.safeAdd(v5881, v5715);
      await stdlib.mapSet(map0, ctc6, v5713, ctc1, v5885);
      const v5886 = true;
      const v5887 = await txn1.getOutput('Admin_setReward', 'v5886', ctc8, v5886);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v5673, v5887), {
          at: './index.rsh:137:11:application',
          fs: ['at ./index.rsh:137:11:application call to [unknown function] (defined at: ./index.rsh:137:11:function exp)', 'at ./index.rsh:156:16:application call to "ret" (defined at: ./index.rsh:144:15:function exp)', 'at ./index.rsh:144:15:application call to [unknown function] (defined at: ./index.rsh:144:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      let v5902;
      if (v5716) {
        const v5903 = stdlib.safeAdd(v3394, v5715);
        v5902 = v5903;
        }
      else {
        v5902 = v3394;
        }
      const v5904 = {
        bal: v5902,
        keepGoing: v3395,
        percent: v3396,
        total_amount_claimed: v3397,
        total_rewards_allcoated: v3398,
        total_users_claim: v3399,
        usersNo: v3400
        };
      const v10012 = v5734;
      const v10013 = v5904.keepGoing;
      if (v10013) {
        const v10014 = v5904.bal;
        const v10016 = v5904.percent;
        const v10017 = v5904.total_amount_claimed;
        const v10018 = v5904.total_rewards_allcoated;
        const v10019 = v5904.total_users_claim;
        const v10020 = v5904.usersNo;
        return;
        }
      else {
        const v10025 = stdlib.sub(v5734, v5734);
        ;
        const v10026 = (stdlib.le(await ctc.getBalance(), v10025) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10025));
        ;
        return;
        }
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Tuple([ctc7, ctc12, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc12]);
  const ctc15 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc8,
    Admin_deposit0_181: ctc9,
    Admin_editUserReward0_181: ctc10,
    Admin_endContractAndTransfer0_181: ctc11,
    Admin_revokeAdmin0_181: ctc8,
    Admin_setReward0_181: ctc13,
    User_claim0_181: ctc14,
    User_optin0_181: ctc11
    });
  const ctc16 = stdlib.T_Tuple([ctc7, ctc12]);
  const ctc17 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false
    });
  
  
  const v3357 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v3357],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3361], secs: v3363, time: v3362, didSend: v27, from: v3360 } = txn1;
      
      ;
      const v3364 = await ctc.getContractInfo();
      
      const v3366 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v3367 = {
        i: v3366,
        sign: true
        };
      const v3368 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v3367,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3369 = v3368;
      const v3370 = v3362;
      const v3373 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v3386 = v3369.keepGoing;
        
        return v3386;})()) {
        const v3394 = v3369.bal;
        const v3395 = v3369.keepGoing;
        const v3396 = v3369.percent;
        const v3397 = v3369.total_amount_claimed;
        const v3398 = v3369.total_rewards_allcoated;
        const v3399 = v3369.total_users_claim;
        const v3400 = v3369.usersNo;
        sim_r.isHalt = false;
        }
      else {
        const v6937 = stdlib.sub(v3373, v3373);
        sim_r.txns.push({
          kind: 'from',
          to: v3360,
          tok: undefined /* Nothing */
          });
        const v6939 = (stdlib.le(await ctc.getBalance(), v6937) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6937));
        sim_r.txns.push({
          kind: 'from',
          to: v3360,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v3361], secs: v3363, time: v3362, didSend: v27, from: v3360 } = txn1;
  ;
  const v3364 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v3364), {
    at: './index.rsh:61:27:application',
    fs: ['at ./index.rsh:61:27:application call to [unknown function] (defined at: ./index.rsh:61:27:function exp)', 'at ./index.rsh:61:27:application call to "liftedInteract" (defined at: ./index.rsh:61:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v3366 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v3367 = {
    i: v3366,
    sign: true
    };
  const v3368 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v3367,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3369 = v3368;
  let v3370 = v3362;
  let v3373 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v3386 = v3369.keepGoing;
    
    return v3386;})()) {
    const v3394 = v3369.bal;
    const v3395 = v3369.keepGoing;
    const v3396 = v3369.percent;
    const v3397 = v3369.total_amount_claimed;
    const v3398 = v3369.total_rewards_allcoated;
    const v3399 = v3369.total_users_claim;
    const v3400 = v3369.usersNo;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn3;
    switch (v3625[0]) {
      case 'Admin_addAdmin0_181': {
        const v3628 = v3625[1];
        undefined /* setApiDetails */;
        const v3634 = stdlib.addressEq(v3624, v3360);
        const v3635 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3624, ctc0), null);
        const v3636 = {
          None: 0,
          Some: 1
          }[v3635[0]];
        const v3637 = stdlib.eq(v3636, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3638 = v3634 ? true : v3637;
        stdlib.assert(v3638, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:34:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        const v3691 = v3628[stdlib.checkedBigNumberify('./index.rsh:196:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v3691, ctc0, null);
        const v3700 = null;
        await txn3.getOutput('Admin_addAdmin', 'v3700', ctc0, v3700);
        const v3714 = {
          bal: v3394,
          keepGoing: v3395,
          percent: v3396,
          total_amount_claimed: v3397,
          total_rewards_allcoated: v3398,
          total_users_claim: v3399,
          usersNo: v3400
          };
        const cv3369 = v3714;
        const cv3370 = v3626;
        const cv3373 = v3373;
        
        v3369 = cv3369;
        v3370 = cv3370;
        v3373 = cv3373;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_181': {
        const v4037 = v3625[1];
        undefined /* setApiDetails */;
        const v4050 = v4037[stdlib.checkedBigNumberify('./index.rsh:124:10:spread', stdlib.UInt_max, '0')];
        const v4051 = stdlib.addressEq(v3624, v3360);
        const v4052 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3624, ctc0), null);
        const v4053 = {
          None: 0,
          Some: 1
          }[v4052[0]];
        const v4054 = stdlib.eq(v4053, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4055 = v4051 ? true : v4054;
        stdlib.assert(v4055, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:32:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:124:32:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v4098 = stdlib.add(v3373, v4050);
        ;
        const v4134 = null;
        await txn3.getOutput('Admin_deposit', 'v4134', ctc0, v4134);
        const v4148 = stdlib.safeAdd(v3394, v4050);
        const v4149 = {
          bal: v4148,
          keepGoing: v3395,
          percent: v3396,
          total_amount_claimed: v3397,
          total_rewards_allcoated: v3398,
          total_users_claim: v3399,
          usersNo: v3400
          };
        const cv3369 = v4149;
        const cv3370 = v3626;
        const cv3373 = v4098;
        
        v3369 = cv3369;
        v3370 = cv3370;
        v3373 = cv3373;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_181': {
        const v4446 = v3625[1];
        undefined /* setApiDetails */;
        const v4468 = v4446[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
        const v4469 = stdlib.addressEq(v3624, v3360);
        const v4470 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v3624, ctc0), null);
        const v4471 = {
          None: 0,
          Some: 1
          }[v4470[0]];
        const v4472 = stdlib.eq(v4471, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4473 = v4469 ? true : v4472;
        stdlib.assert(v4473, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v4476 = stdlib.le(v4468, v3373);
        stdlib.assert(v4476, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:45:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:184:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        const v4561 = v4446[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc7, v4561, ctc1, v4468);
        const v4574 = null;
        await txn3.getOutput('Admin_editUserReward', 'v4574', ctc0, v4574);
        const v4589 = {
          bal: v3394,
          keepGoing: v3395,
          percent: v3396,
          total_amount_claimed: v3397,
          total_rewards_allcoated: v3398,
          total_users_claim: v3399,
          usersNo: v3400
          };
        const cv3369 = v4589;
        const cv3370 = v3626;
        const cv3373 = v3373;
        
        v3369 = cv3369;
        v3370 = cv3370;
        v3373 = cv3373;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_181': {
        const v4855 = v3625[1];
        undefined /* setApiDetails */;
        const v4888 = stdlib.addressEq(v3360, v3624);
        stdlib.assert(v4888, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:326:44:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:326:44:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        const v5003 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v5003', ctc0, v5003);
        const v5016 = {
          bal: v3394,
          keepGoing: false,
          percent: v3396,
          total_amount_claimed: v3397,
          total_rewards_allcoated: v3398,
          total_users_claim: v3399,
          usersNo: v3400
          };
        const cv3369 = v5016;
        const cv3370 = v3626;
        const cv3373 = v3373;
        
        v3369 = cv3369;
        v3370 = cv3370;
        v3373 = cv3373;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_181': {
        const v5264 = v3625[1];
        undefined /* setApiDetails */;
        const v5301 = stdlib.addressEq(v3624, v3360);
        stdlib.assert(v5301, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:211:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:210:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:210:37:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        const v5428 = v5264[stdlib.checkedBigNumberify('./index.rsh:210:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc7, v5428, ctc0, undefined /* Nothing */);
        const v5433 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v5433', ctc0, v5433);
        const v5447 = {
          bal: v3394,
          keepGoing: v3395,
          percent: v3396,
          total_amount_claimed: v3397,
          total_rewards_allcoated: v3398,
          total_users_claim: v3399,
          usersNo: v3400
          };
        const cv3369 = v5447;
        const cv3370 = v3626;
        const cv3373 = v3373;
        
        v3369 = cv3369;
        v3370 = cv3370;
        v3373 = cv3373;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_181': {
        const v5673 = v3625[1];
        undefined /* setApiDetails */;
        const v5713 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
        const v5715 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '2')];
        const v5716 = stdlib.gt(v5715, v3394);
        const v5717 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc7, v5713, ctc0), null);
        const v5718 = {
          None: 0,
          Some: 1
          }[v5717[0]];
        const v5719 = stdlib.eq(v5718, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5719, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:45:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:137:45:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v5721 = v5716 ? v5715 : stdlib.checkedBigNumberify('./index.rsh:143:30:decimal', stdlib.UInt_max, '0');
        const v5734 = stdlib.add(v3373, v5721);
        ;
        const v5860 = v5673[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
        const v5870 = [v5713, v5860];
        const v5871 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5870, ctc3), null);
        const v5872 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5873 = stdlib.fromSome(v5871, v5872);
        const v5875 = v5873.claimed;
        const v5876 = v5873.rewards;
        const v5878 = stdlib.safeAdd(v5876, v5715);
        const v5879 = {
          claimed: v5875,
          rewards: v5878
          };
        await stdlib.mapSet(map1, ctc16, v5870, ctc3, v5879);
        const v5880 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5713, ctc1), null);
        const v5881 = stdlib.fromSome(v5880, stdlib.checkedBigNumberify('./index.rsh:153:60:decimal', stdlib.UInt_max, '0'));
        const v5885 = stdlib.safeAdd(v5881, v5715);
        await stdlib.mapSet(map0, ctc7, v5713, ctc1, v5885);
        const v5886 = true;
        await txn3.getOutput('Admin_setReward', 'v5886', ctc17, v5886);
        let v5902;
        if (v5716) {
          const v5903 = stdlib.safeAdd(v3394, v5715);
          v5902 = v5903;
          }
        else {
          v5902 = v3394;
          }
        const v5904 = {
          bal: v5902,
          keepGoing: v3395,
          percent: v3396,
          total_amount_claimed: v3397,
          total_rewards_allcoated: v3398,
          total_users_claim: v3399,
          usersNo: v3400
          };
        const cv3369 = v5904;
        const cv3370 = v3626;
        const cv3373 = v5734;
        
        v3369 = cv3369;
        v3370 = cv3370;
        v3373 = cv3373;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_181': {
        const v6082 = v3625[1];
        undefined /* setApiDetails */;
        const v6132 = v6082[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '0')];
        const v6134 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3624, ctc1), null);
        const v6135 = stdlib.fromSome(v6134, stdlib.checkedBigNumberify('./index.rsh:270:56:decimal', stdlib.UInt_max, '0'));
        const v6137 = stdlib.le(v6132, v3373);
        stdlib.assert(v6137, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v6139 = stdlib.ge(v6135, v6132);
        stdlib.assert(v6139, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        const v6359 = v6082[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '1')];
        const v6372 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc7, v3624, ctc0), null);
        const v6373 = {
          None: 0,
          Some: 1
          }[v6372[0]];
        const v6374 = stdlib.eq(v6373, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6375 = [v3624, v6359];
        const v6376 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6375, ctc3), null);
        const v6377 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6378 = stdlib.fromSome(v6376, v6377);
        const v6380 = v6378.claimed;
        const v6381 = v6378.rewards;
        const v6383 = stdlib.safeAdd(v6380, v6132);
        const v6385 = stdlib.safeSub(v6381, v6132);
        const v6386 = {
          claimed: v6383,
          rewards: v6385
          };
        await stdlib.mapSet(map1, ctc16, v6375, ctc3, v6386);
        const v6387 = true;
        await txn3.getOutput('User_claim', 'v6387', ctc17, v6387);
        const v6395 = {
          addr: v3624,
          amount: v6132,
          projectName: v3361
          };
        null;
        if (v6374) {
          const v6439 = stdlib.sub(v3373, v6132);
          ;
          const v6442 = stdlib.eq(v6135, stdlib.checkedBigNumberify('./index.rsh:298:23:decimal', stdlib.UInt_max, '0'));
          if (v6442) {
            await stdlib.mapSet(map0, ctc7, v3624, ctc1, undefined /* Nothing */);
            const v6452 = stdlib.safeAdd(v3400, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
            const v6453 = stdlib.safeSub(v3394, v6132);
            const v6454 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
            const v6455 = stdlib.safeAdd(v3397, v6132);
            const v6456 = {
              bal: v6453,
              keepGoing: v3395,
              percent: v3396,
              total_amount_claimed: v6455,
              total_rewards_allcoated: v3398,
              total_users_claim: v6454,
              usersNo: v6452
              };
            const cv3369 = v6456;
            const cv3370 = v3626;
            const cv3373 = v6439;
            
            v3369 = cv3369;
            v3370 = cv3370;
            v3373 = cv3373;
            
            txn2 = txn3;
            continue;}
          else {
            const v6458 = stdlib.safeSub(v6135, v6132);
            await stdlib.mapSet(map0, ctc7, v3624, ctc1, v6458);
            const v6468 = stdlib.safeAdd(v3400, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
            const v6469 = stdlib.safeSub(v3394, v6132);
            const v6470 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
            const v6471 = stdlib.safeAdd(v3397, v6132);
            const v6472 = {
              bal: v6469,
              keepGoing: v3395,
              percent: v3396,
              total_amount_claimed: v6471,
              total_rewards_allcoated: v3398,
              total_users_claim: v6470,
              usersNo: v6468
              };
            const cv3369 = v6472;
            const cv3370 = v3626;
            const cv3373 = v6439;
            
            v3369 = cv3369;
            v3370 = cv3370;
            v3373 = cv3373;
            
            txn2 = txn3;
            continue;}}
        else {
          await stdlib.mapSet(map3, ctc7, v3624, ctc0, null);
          const v6401 = stdlib.sub(v3373, v6132);
          ;
          const v6404 = stdlib.eq(v6135, stdlib.checkedBigNumberify('./index.rsh:298:23:decimal', stdlib.UInt_max, '0'));
          if (v6404) {
            await stdlib.mapSet(map0, ctc7, v3624, ctc1, undefined /* Nothing */);
            const v6415 = stdlib.safeSub(v3394, v6132);
            const v6416 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
            const v6417 = stdlib.safeAdd(v3397, v6132);
            const v6418 = {
              bal: v6415,
              keepGoing: v3395,
              percent: v3396,
              total_amount_claimed: v6417,
              total_rewards_allcoated: v3398,
              total_users_claim: v6416,
              usersNo: v3400
              };
            const cv3369 = v6418;
            const cv3370 = v3626;
            const cv3373 = v6401;
            
            v3369 = cv3369;
            v3370 = cv3370;
            v3373 = cv3373;
            
            txn2 = txn3;
            continue;}
          else {
            const v6420 = stdlib.safeSub(v6135, v6132);
            await stdlib.mapSet(map0, ctc7, v3624, ctc1, v6420);
            const v6431 = stdlib.safeSub(v3394, v6132);
            const v6432 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
            const v6433 = stdlib.safeAdd(v3397, v6132);
            const v6434 = {
              bal: v6431,
              keepGoing: v3395,
              percent: v3396,
              total_amount_claimed: v6433,
              total_rewards_allcoated: v3398,
              total_users_claim: v6432,
              usersNo: v3400
              };
            const cv3369 = v6434;
            const cv3370 = v3626;
            const cv3373 = v6401;
            
            v3369 = cv3369;
            v3370 = cv3370;
            v3373 = cv3373;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_181': {
        const v6491 = v3625[1];
        undefined /* setApiDetails */;
        ;
        await stdlib.mapSet(map4, ctc7, v3624, ctc0, null);
        const v6885 = null;
        await txn3.getOutput('User_optin', 'v6885', ctc0, v6885);
        const v6898 = {
          bal: v3394,
          keepGoing: v3395,
          percent: v3396,
          total_amount_claimed: v3397,
          total_rewards_allcoated: v3398,
          total_users_claim: v3399,
          usersNo: v3400
          };
        const cv3369 = v6898;
        const cv3370 = v3626;
        const cv3373 = v3373;
        
        v3369 = cv3369;
        v3370 = cv3370;
        v3373 = cv3373;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v6937 = stdlib.sub(v3373, v3373);
  ;
  const v6939 = (stdlib.le(await ctc.getBalance(), v6937) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6937));
  ;
  return;
  
  
  };
export async function _User_claim3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_claim3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_claim3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc11, ctc1]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc13,
    Admin_deposit0_181: ctc14,
    Admin_editUserReward0_181: ctc15,
    Admin_endContractAndTransfer0_181: ctc16,
    Admin_revokeAdmin0_181: ctc13,
    Admin_setReward0_181: ctc17,
    User_claim0_181: ctc12,
    User_optin0_181: ctc16
    });
  const ctc19 = stdlib.T_Tuple([ctc6, ctc11]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3527 = ctc.selfAddress();
  const v3529 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to "runUser_claim0_181" (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v3530 = v3529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3534 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3527, ctc1), null);
  const v3535 = stdlib.fromSome(v3534, stdlib.checkedBigNumberify('./index.rsh:270:56:decimal', stdlib.UInt_max, '0'));
  const v3537 = stdlib.le(v3530, v3373);
  stdlib.assert(v3537, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to "runUser_claim0_181" (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v3539 = stdlib.ge(v3535, v3530);
  stdlib.assert(v3539, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to "runUser_claim0_181" (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v3548 = ['User_claim0_181', v3529];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3548],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:274:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v6132 = v6082[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '0')];
          const v6134 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3624, ctc1), null);
          const v6135 = stdlib.fromSome(v6134, stdlib.checkedBigNumberify('./index.rsh:270:56:decimal', stdlib.UInt_max, '0'));
          ;
          const v6359 = v6082[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '1')];
          const v6372 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v3624, ctc0), null);
          const v6373 = {
            None: 0,
            Some: 1
            }[v6372[0]];
          const v6374 = stdlib.eq(v6373, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v6375 = [v3624, v6359];
          const v6376 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v6375, ctc3), null);
          const v6377 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6378 = stdlib.fromSome(v6376, v6377);
          const v6380 = v6378.claimed;
          const v6381 = v6378.rewards;
          const v6383 = stdlib.safeAdd(v6380, v6132);
          const v6385 = stdlib.safeSub(v6381, v6132);
          const v6386 = {
            claimed: v6383,
            rewards: v6385
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v6375, ctc3, v6386);
          const v6387 = true;
          const v6388 = await txn1.getOutput('User_claim', 'v6387', ctc8, v6387);
          
          const v6395 = {
            addr: v3624,
            amount: v6132,
            projectName: v3361
            };
          null;
          if (v6374) {
            const v6439 = stdlib.sub(v3373, v6132);
            sim_r.txns.push({
              kind: 'from',
              to: v3624,
              tok: undefined /* Nothing */
              });
            const v6442 = stdlib.eq(v6135, stdlib.checkedBigNumberify('./index.rsh:298:23:decimal', stdlib.UInt_max, '0'));
            if (v6442) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v3624, ctc1, undefined /* Nothing */);
              const v6452 = stdlib.safeAdd(v3400, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
              const v6453 = stdlib.safeSub(v3394, v6132);
              const v6454 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
              const v6455 = stdlib.safeAdd(v3397, v6132);
              const v6456 = {
                bal: v6453,
                keepGoing: v3395,
                percent: v3396,
                total_amount_claimed: v6455,
                total_rewards_allcoated: v3398,
                total_users_claim: v6454,
                usersNo: v6452
                };
              const v10216 = v6439;
              const v10217 = v6456.keepGoing;
              if (v10217) {
                const v10218 = v6456.bal;
                const v10220 = v6456.percent;
                const v10221 = v6456.total_amount_claimed;
                const v10222 = v6456.total_rewards_allcoated;
                const v10223 = v6456.total_users_claim;
                const v10224 = v6456.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v10229 = stdlib.sub(v6439, v6439);
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                const v10230 = (stdlib.le(await ctc.getBalance(), v10229) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10229));
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6458 = stdlib.safeSub(v6135, v6132);
              await stdlib.simMapSet(sim_r, 0, ctc6, v3624, ctc1, v6458);
              const v6468 = stdlib.safeAdd(v3400, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
              const v6469 = stdlib.safeSub(v3394, v6132);
              const v6470 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
              const v6471 = stdlib.safeAdd(v3397, v6132);
              const v6472 = {
                bal: v6469,
                keepGoing: v3395,
                percent: v3396,
                total_amount_claimed: v6471,
                total_rewards_allcoated: v3398,
                total_users_claim: v6470,
                usersNo: v6468
                };
              const v10233 = v6439;
              const v10234 = v6472.keepGoing;
              if (v10234) {
                const v10235 = v6472.bal;
                const v10237 = v6472.percent;
                const v10238 = v6472.total_amount_claimed;
                const v10239 = v6472.total_rewards_allcoated;
                const v10240 = v6472.total_users_claim;
                const v10241 = v6472.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v10246 = stdlib.sub(v6439, v6439);
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                const v10247 = (stdlib.le(await ctc.getBalance(), v10246) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10246));
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v3624, ctc0, null);
            const v6401 = stdlib.sub(v3373, v6132);
            sim_r.txns.push({
              kind: 'from',
              to: v3624,
              tok: undefined /* Nothing */
              });
            const v6404 = stdlib.eq(v6135, stdlib.checkedBigNumberify('./index.rsh:298:23:decimal', stdlib.UInt_max, '0'));
            if (v6404) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v3624, ctc1, undefined /* Nothing */);
              const v6415 = stdlib.safeSub(v3394, v6132);
              const v6416 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
              const v6417 = stdlib.safeAdd(v3397, v6132);
              const v6418 = {
                bal: v6415,
                keepGoing: v3395,
                percent: v3396,
                total_amount_claimed: v6417,
                total_rewards_allcoated: v3398,
                total_users_claim: v6416,
                usersNo: v3400
                };
              const v10250 = v6401;
              const v10251 = v6418.keepGoing;
              if (v10251) {
                const v10252 = v6418.bal;
                const v10254 = v6418.percent;
                const v10255 = v6418.total_amount_claimed;
                const v10256 = v6418.total_rewards_allcoated;
                const v10257 = v6418.total_users_claim;
                const v10258 = v6418.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v10263 = stdlib.sub(v6401, v6401);
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                const v10264 = (stdlib.le(await ctc.getBalance(), v10263) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10263));
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6420 = stdlib.safeSub(v6135, v6132);
              await stdlib.simMapSet(sim_r, 0, ctc6, v3624, ctc1, v6420);
              const v6431 = stdlib.safeSub(v3394, v6132);
              const v6432 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
              const v6433 = stdlib.safeAdd(v3397, v6132);
              const v6434 = {
                bal: v6431,
                keepGoing: v3395,
                percent: v3396,
                total_amount_claimed: v6433,
                total_rewards_allcoated: v3398,
                total_users_claim: v6432,
                usersNo: v3400
                };
              const v10267 = v6401;
              const v10268 = v6434.keepGoing;
              if (v10268) {
                const v10269 = v6434.bal;
                const v10271 = v6434.percent;
                const v10272 = v6434.total_amount_claimed;
                const v10273 = v6434.total_rewards_allcoated;
                const v10274 = v6434.total_users_claim;
                const v10275 = v6434.usersNo;
                sim_r.isHalt = false;
                }
              else {
                const v10280 = stdlib.sub(v6401, v6401);
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                const v10281 = (stdlib.le(await ctc.getBalance(), v10280) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10280));
                sim_r.txns.push({
                  kind: 'from',
                  to: v3360,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      undefined /* setApiDetails */;
      const v6132 = v6082[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '0')];
      const v6134 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3624, ctc1), null);
      const v6135 = stdlib.fromSome(v6134, stdlib.checkedBigNumberify('./index.rsh:270:56:decimal', stdlib.UInt_max, '0'));
      const v6137 = stdlib.le(v6132, v3373);
      stdlib.assert(v6137, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v6139 = stdlib.ge(v6135, v6132);
      stdlib.assert(v6139, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:34:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:269:34:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      const v6359 = v6082[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '1')];
      const v6372 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v3624, ctc0), null);
      const v6373 = {
        None: 0,
        Some: 1
        }[v6372[0]];
      const v6374 = stdlib.eq(v6373, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6375 = [v3624, v6359];
      const v6376 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v6375, ctc3), null);
      const v6377 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6378 = stdlib.fromSome(v6376, v6377);
      const v6380 = v6378.claimed;
      const v6381 = v6378.rewards;
      const v6383 = stdlib.safeAdd(v6380, v6132);
      const v6385 = stdlib.safeSub(v6381, v6132);
      const v6386 = {
        claimed: v6383,
        rewards: v6385
        };
      await stdlib.mapSet(map1, ctc19, v6375, ctc3, v6386);
      const v6387 = true;
      const v6388 = await txn1.getOutput('User_claim', 'v6387', ctc8, v6387);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v6082, v6388), {
          at: './index.rsh:269:11:application',
          fs: ['at ./index.rsh:269:11:application call to [unknown function] (defined at: ./index.rsh:269:11:function exp)', 'at ./index.rsh:288:14:application call to "ret" (defined at: ./index.rsh:275:15:function exp)', 'at ./index.rsh:275:15:application call to [unknown function] (defined at: ./index.rsh:275:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v6395 = {
        addr: v3624,
        amount: v6132,
        projectName: v3361
        };
      null;
      if (v6374) {
        const v6439 = stdlib.sub(v3373, v6132);
        ;
        const v6442 = stdlib.eq(v6135, stdlib.checkedBigNumberify('./index.rsh:298:23:decimal', stdlib.UInt_max, '0'));
        if (v6442) {
          await stdlib.mapSet(map0, ctc6, v3624, ctc1, undefined /* Nothing */);
          const v6452 = stdlib.safeAdd(v3400, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
          const v6453 = stdlib.safeSub(v3394, v6132);
          const v6454 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
          const v6455 = stdlib.safeAdd(v3397, v6132);
          const v6456 = {
            bal: v6453,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v6455,
            total_rewards_allcoated: v3398,
            total_users_claim: v6454,
            usersNo: v6452
            };
          const v10216 = v6439;
          const v10217 = v6456.keepGoing;
          if (v10217) {
            const v10218 = v6456.bal;
            const v10220 = v6456.percent;
            const v10221 = v6456.total_amount_claimed;
            const v10222 = v6456.total_rewards_allcoated;
            const v10223 = v6456.total_users_claim;
            const v10224 = v6456.usersNo;
            return;
            }
          else {
            const v10229 = stdlib.sub(v6439, v6439);
            ;
            const v10230 = (stdlib.le(await ctc.getBalance(), v10229) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10229));
            ;
            return;
            }}
        else {
          const v6458 = stdlib.safeSub(v6135, v6132);
          await stdlib.mapSet(map0, ctc6, v3624, ctc1, v6458);
          const v6468 = stdlib.safeAdd(v3400, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
          const v6469 = stdlib.safeSub(v3394, v6132);
          const v6470 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
          const v6471 = stdlib.safeAdd(v3397, v6132);
          const v6472 = {
            bal: v6469,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v6471,
            total_rewards_allcoated: v3398,
            total_users_claim: v6470,
            usersNo: v6468
            };
          const v10233 = v6439;
          const v10234 = v6472.keepGoing;
          if (v10234) {
            const v10235 = v6472.bal;
            const v10237 = v6472.percent;
            const v10238 = v6472.total_amount_claimed;
            const v10239 = v6472.total_rewards_allcoated;
            const v10240 = v6472.total_users_claim;
            const v10241 = v6472.usersNo;
            return;
            }
          else {
            const v10246 = stdlib.sub(v6439, v6439);
            ;
            const v10247 = (stdlib.le(await ctc.getBalance(), v10246) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10246));
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map3, ctc6, v3624, ctc0, null);
        const v6401 = stdlib.sub(v3373, v6132);
        ;
        const v6404 = stdlib.eq(v6135, stdlib.checkedBigNumberify('./index.rsh:298:23:decimal', stdlib.UInt_max, '0'));
        if (v6404) {
          await stdlib.mapSet(map0, ctc6, v3624, ctc1, undefined /* Nothing */);
          const v6415 = stdlib.safeSub(v3394, v6132);
          const v6416 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
          const v6417 = stdlib.safeAdd(v3397, v6132);
          const v6418 = {
            bal: v6415,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v6417,
            total_rewards_allcoated: v3398,
            total_users_claim: v6416,
            usersNo: v3400
            };
          const v10250 = v6401;
          const v10251 = v6418.keepGoing;
          if (v10251) {
            const v10252 = v6418.bal;
            const v10254 = v6418.percent;
            const v10255 = v6418.total_amount_claimed;
            const v10256 = v6418.total_rewards_allcoated;
            const v10257 = v6418.total_users_claim;
            const v10258 = v6418.usersNo;
            return;
            }
          else {
            const v10263 = stdlib.sub(v6401, v6401);
            ;
            const v10264 = (stdlib.le(await ctc.getBalance(), v10263) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10263));
            ;
            return;
            }}
        else {
          const v6420 = stdlib.safeSub(v6135, v6132);
          await stdlib.mapSet(map0, ctc6, v3624, ctc1, v6420);
          const v6431 = stdlib.safeSub(v3394, v6132);
          const v6432 = stdlib.safeAdd(v3399, stdlib.checkedBigNumberify('./index.rsh:307:52:decimal', stdlib.UInt_max, '1'));
          const v6433 = stdlib.safeAdd(v3397, v6132);
          const v6434 = {
            bal: v6431,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v6433,
            total_rewards_allcoated: v3398,
            total_users_claim: v6432,
            usersNo: v3400
            };
          const v10267 = v6401;
          const v10268 = v6434.keepGoing;
          if (v10268) {
            const v10269 = v6434.bal;
            const v10271 = v6434.percent;
            const v10272 = v6434.total_amount_claimed;
            const v10273 = v6434.total_rewards_allcoated;
            const v10274 = v6434.total_users_claim;
            const v10275 = v6434.usersNo;
            return;
            }
          else {
            const v10280 = stdlib.sub(v6401, v6401);
            ;
            const v10281 = (stdlib.le(await ctc.getBalance(), v10280) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10280));
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_optin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_optin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_optin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc10 = stdlib.T_Object({
    i: ctc9,
    sign: ctc8
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc6, ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc18 = stdlib.T_Data({
    Admin_addAdmin0_181: ctc12,
    Admin_deposit0_181: ctc13,
    Admin_editUserReward0_181: ctc14,
    Admin_endContractAndTransfer0_181: ctc11,
    Admin_revokeAdmin0_181: ctc12,
    Admin_setReward0_181: ctc16,
    User_claim0_181: ctc17,
    User_optin0_181: ctc11
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1]);
  const v3552 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:316:26:application call to [unknown function] (defined at: ./index.rsh:316:26:function exp)', 'at ./index.rsh:79:37:application call to "runUser_optin0_181" (defined at: ./index.rsh:316:10:function exp)', 'at ./index.rsh:79:37:application call to [unknown function] (defined at: ./index.rsh:79:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v3556 = ['User_optin0_181', v3552];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3360, v3361, v3373, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3556],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:318:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
      
      switch (v3625[0]) {
        case 'Admin_addAdmin0_181': {
          const v3628 = v3625[1];
          
          break;
          }
        case 'Admin_deposit0_181': {
          const v4037 = v3625[1];
          
          break;
          }
        case 'Admin_editUserReward0_181': {
          const v4446 = v3625[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_181': {
          const v4855 = v3625[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_181': {
          const v5264 = v3625[1];
          
          break;
          }
        case 'Admin_setReward0_181': {
          const v5673 = v3625[1];
          
          break;
          }
        case 'User_claim0_181': {
          const v6082 = v3625[1];
          
          break;
          }
        case 'User_optin0_181': {
          const v6491 = v3625[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v3624, ctc0, null);
          const v6885 = null;
          const v6886 = await txn1.getOutput('User_optin', 'v6885', ctc0, v6885);
          
          const v6898 = {
            bal: v3394,
            keepGoing: v3395,
            percent: v3396,
            total_amount_claimed: v3397,
            total_rewards_allcoated: v3398,
            total_users_claim: v3399,
            usersNo: v3400
            };
          const v10471 = v3373;
          const v10472 = v6898.keepGoing;
          if (v10472) {
            const v10473 = v6898.bal;
            const v10475 = v6898.percent;
            const v10476 = v6898.total_amount_claimed;
            const v10477 = v6898.total_rewards_allcoated;
            const v10478 = v6898.total_users_claim;
            const v10479 = v6898.usersNo;
            sim_r.isHalt = false;
            }
          else {
            const v10484 = stdlib.sub(v3373, v3373);
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            const v10485 = (stdlib.le(await ctc.getBalance(), v10484) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10484));
            sim_r.txns.push({
              kind: 'from',
              to: v3360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc1, ctc1, ctc8, ctc10, ctc1, ctc1, ctc1, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3625], secs: v3627, time: v3626, didSend: v2824, from: v3624 } = txn1;
  switch (v3625[0]) {
    case 'Admin_addAdmin0_181': {
      const v3628 = v3625[1];
      return;
      break;
      }
    case 'Admin_deposit0_181': {
      const v4037 = v3625[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_181': {
      const v4446 = v3625[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_181': {
      const v4855 = v3625[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_181': {
      const v5264 = v3625[1];
      return;
      break;
      }
    case 'Admin_setReward0_181': {
      const v5673 = v3625[1];
      return;
      break;
      }
    case 'User_claim0_181': {
      const v6082 = v3625[1];
      return;
      break;
      }
    case 'User_optin0_181': {
      const v6491 = v3625[1];
      undefined /* setApiDetails */;
      ;
      await stdlib.mapSet(map4, ctc6, v3624, ctc0, null);
      const v6885 = null;
      const v6886 = await txn1.getOutput('User_optin', 'v6885', ctc0, v6885);
      if (v2824) {
        stdlib.protect(ctc0, await interact.out(v6491, v6886), {
          at: './index.rsh:316:11:application',
          fs: ['at ./index.rsh:316:11:application call to [unknown function] (defined at: ./index.rsh:316:11:function exp)', 'at ./index.rsh:321:14:application call to "ret" (defined at: ./index.rsh:319:15:function exp)', 'at ./index.rsh:319:15:application call to [unknown function] (defined at: ./index.rsh:319:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6898 = {
        bal: v3394,
        keepGoing: v3395,
        percent: v3396,
        total_amount_claimed: v3397,
        total_rewards_allcoated: v3398,
        total_users_claim: v3399,
        usersNo: v3400
        };
      const v10471 = v3373;
      const v10472 = v6898.keepGoing;
      if (v10472) {
        const v10473 = v6898.bal;
        const v10475 = v6898.percent;
        const v10476 = v6898.total_amount_claimed;
        const v10477 = v6898.total_rewards_allcoated;
        const v10478 = v6898.total_users_claim;
        const v10479 = v6898.usersNo;
        return;
        }
      else {
        const v10484 = stdlib.sub(v3373, v3373);
        ;
        const v10485 = (stdlib.le(await ctc.getBalance(), v10484) ? stdlib.checkedBigNumberify('./index.rsh:339:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10484));
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Admin_addAdmin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_addAdmin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_addAdmin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_addAdmin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_deposit3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_editUserReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_editUserReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_editUserReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_editUserReward3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_endContractAndTransfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_endContractAndTransfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_endContractAndTransfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_endContractAndTransfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_revokeAdmin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_revokeAdmin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_revokeAdmin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_revokeAdmin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_setReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_setReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_setReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_setReward3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _User_claim3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_optin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_optin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_optin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _User_optin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[48])))void`],
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30]))void`, `_reachp_2((uint64,(byte,byte[48])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEIAxDUkwHUeijUxQEmBgABAAEBAQIBBAEDMRhBCAMoZEkiWzUBJFs1AilkKmRQghQEAl90xwQNs4a8BBNuVzsEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEJoJ9UESCT5AgRu5HYUBHhK2TcEev7IbQTHwpzVBN5XBGQE7UbbpgTzJ3gEBPlvbOAE+XMOCwT6rsiwNhoAjhQAVAIsAXcBBgJOAZsB/AE3B0MBqwCJAcsBuwFHB1UA3wDJAdsAawABADYaATULJK8pNAtQIQSvUFA1CyU0ARJEiAjhNAsiWzUMNAtXCDE1DYAEVQtlgzQMFlA0DVCwNAyICUQ0DSJVjQgIdAh3CHoIhAcvBzIHPAdGQv+sNhoBFzULJK8qNAsWUCEHr1BQNQtC/6g2GgE2GgIXNQs1DCSvKzQMNAsWUFAkr1BQNQtC/4qAOQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9KNhoBNQskrycENAtQIQSvUFA1C0L/NDYaATYaAhc2GgMXNQs1DDUNJK+AAQU0DTQMFlA0CxZQUFA1C0L/DTYaATULNAElEkSIB+koKCs0C1CIB9UiVSMSFlEHCDUEMRkiEkSABBUffHU0BFCwI0M0ASUSRIgHvTQVFjUEQv/fNhoBNhoCFzULNQw0ASUSRIgHoiEEryghBK8qNAw0CxZQUIgHhYgH2FcACDUEQv+vNhoBNQs0ASUSRIgHeCgoJwQ0C1CIB2MiVSMSFlEHCDUEQv+LNAElEkSIB1k0EBY1BEL/ezQBJRJEiAdJNBEWNQRC/2s0ASUSRIgHOTQPFjUEQv9bNAElEkSIByk0DhY1BEL/SzYaATULNAElEkSIBxQkrygkryk0C1CIBv2IB1A1BEL/KjYaATYaAhc1CzUMNAElEkSIBu0hBK8oIQSvKjQMNAsWUFCIBtCIByNXCAg1BEL++jYaARc2GgIXNQs1DCSvgAEGNAwWNAsWUFAyA1BQNQtC/cWAOQAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv2FMQA0GRIoKCsxAFCIBlUiVSMSEUQhBis0DVcBIFAoiAaKKDULgAgAAAAAAAAOdDQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRc0F1cIARdBBY40FyJbNRQ0F1cIARc1EzQXVwkRNRI0F4EaWzURNBeBIls1EDQXgSpbNQ80F4EyWzUONBk0GFA0FRZQNBQWUDQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQJTIGNQI1ASlLAVcAf2cqTFd/AWcoNAEWNAIWUGcxGSISRIgGHDQDQP3DQv22NA0jWzULMQA0GRIoKCsxAFCIBWgiVSMSEUQ0C4gFyyg1DIAIAAAAAAAAECY0DFCwNAw1BDQUNAsIFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY0FTQLCDUVNRY1F0L/DjQLgSBbNQwxADQZEigoKzEAUIgFAyJVIxIRRDQMNBUORCEFKTQLVwAgUDQMFogFMCg1C4AIAAAAAAAAEd40C1CwNAs1BDQUFjQTFlEHCFA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQv6jNBkxABJEKDULgAgAAAAAAAATizQLULA0CzUENBQWKVA0ElA0ERZQNBAWUDQPFlA0DhZQMgY1FjUXQv5nMQA0GRJEIQYrNA1XASBQiATCKDULgAgAAAAAAAAVOTQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/ho0C1cAIDUcNAshB1tJNRs0FA01GigoJwQ0HFCIBAYiVSMSRCI0GzQaTUk1DYgEYzQcNAtXIAhQNQwhBK8oIQSvKjQMUIgD3YgEMDULIQgqNAxQNAtXAAg0CyRbNBsIFlCIBAkhBSk0HFAkrygkryk0HFCIA6+IBAIXNBsIFogD7CM1C4AIAAAAAAAAFv40CxZRBwhQsDQLFlEHCDUENBpBAis0FDQbCDULNAsWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjQVNA0INRU1FjUXQv1ENAsiWzUaJK8oJK8pMQBQiAM8iAOPFzUNNBo0FQ5ENA00Gg9EMQA0C1cICFA1DCEEryghBK8qNAxQiAMSiANlNQshCCo0DFA0CyJbNBoIFjQLJFs0GgkWUIgDOyM1C4AIAAAAAAAAGPM0CxZRBwhQsDQLFlEHCDUEMQA0GhZQNBhQNQuABJvIVFA0C1CwKCgnBTEAUIgCtyJVIxJBAWA0FTQaCTULNBoxAIgDATQNQAGmIQUpMQBQiAL3NBQ0GgkWNBMWUQcIUDQSUDQRNBoIFlA0EBZQNA8jCBZQNA4jCBZQMgY0CzUVNRY1F0L8ViEGJwQxAFAoiAKdKDULgAgAAAAAAAAa5TQLULA0CzUENBQWNBMWUQcIUDQSUDQRFlA0EBZQNA8WUDQOFlAyBjUWNRdC/BAxADUZNAsiWzUMNAtXCB41GIAE0SoGjTQMFlA0GFCwNAyIAoSAOgAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAGQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyBiI1FTUWNRdC+6SIAjWBoI0GiAJINhoBNQtC/4KIAiM2GgE1C0L4syIxNBJEJTE1EkQiMTYSRCIxNxJEiAIEgYABryIiQvvLQvz9NA1XATA1C0L9QDQNVwEQNQtC/gxC/vc0FDULQv3VIQYnBTEAUCiIAY00FTQaCTULNBoxAIgBljQNQAB+IQUpMQBQiAGMNBQ0GgkWNBMWUQcIUDQSUDQRNBoIFlA0EBZQNA8jCBZQNA4WUDIGNAs1FTUWNRdC+u0hBSkxAFA0DTQaCRaIATA0FDQaCRY0ExZRBwhQNBJQNBE0GggWUDQQFlA0DyMIFlA0DiMIFlAyBjQLNRU1FjUXQvqqIQUpMQBQNA00GgkWiADtNBQ0GgkWNBMWUQcIUDQSUDQRNBoIFlA0EBZQNA8jCBZQNA4WUDIGNAs1FTUWNRdC+mk0FTQZiADLMgpgMgp4CTQVSQkJSTULNBmIALcxGYEFEkSIAOcyCmAyCngJSTUGMgqIAJ9C+rlITL9IiSKyASOyELIHsgiziUL5xkL6qjQNVwEoNQtC+wRC+2xIiUwJSTUGMgmIAGyJCUlB/+5JNQaIAG+JvkkWUQcIRQRNUIlJVwAgNRlJVyAeNRhJgT5bNRVJgUZbNRRJV04BFzUTSVdPETUSSYFgWzURSYFoWzUQSYFwWzUPgXhbNQ6JTEm9QP91SwOIAFFC/21JVwEATCJVTYmxQv9lvCJOAk00Bwg1B4kxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/0hC/1A0Bgg1Bok=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `488`,
    1001: `489`,
    1002: `489`,
    1003: `490`,
    1004: `491`,
    1005: `491`,
    1006: `492`,
    1007: `493`,
    1008: `494`,
    1009: `494`,
    101: `21`,
    1010: `495`,
    1011: `496`,
    1012: `497`,
    1013: `497`,
    1014: `498`,
    1015: `499`,
    1016: `499`,
    1017: `499`,
    1018: `500`,
    1019: `501`,
    102: `21`,
    1020: `501`,
    1021: `502`,
    1022: `503`,
    1023: `503`,
    1024: `504`,
    1025: `505`,
    1026: `506`,
    1027: `506`,
    1028: `507`,
    1029: `508`,
    103: `21`,
    1030: `509`,
    1031: `509`,
    1032: `510`,
    1033: `511`,
    1034: `512`,
    1035: `512`,
    1036: `513`,
    1037: `514`,
    1038: `515`,
    1039: `516`,
    104: `21`,
    1040: `516`,
    1041: `518`,
    1042: `518`,
    1043: `519`,
    1044: `519`,
    1045: `520`,
    1046: `521`,
    1047: `521`,
    1048: `522`,
    1049: `522`,
    105: `21`,
    1050: `522`,
    1051: `523`,
    1052: `524`,
    1053: `525`,
    1054: `526`,
    1055: `526`,
    1056: `526`,
    1057: `527`,
    1058: `528`,
    1059: `529`,
    106: `21`,
    1060: `529`,
    1061: `530`,
    1062: `531`,
    1063: `531`,
    1064: `532`,
    1065: `533`,
    1066: `534`,
    1067: `535`,
    1068: `535`,
    1069: `536`,
    107: `21`,
    1070: `537`,
    1071: `538`,
    1072: `540`,
    1073: `540`,
    1074: `540`,
    1075: `542`,
    1076: `542`,
    1077: `543`,
    1078: `543`,
    1079: `543`,
    108: `21`,
    1080: `544`,
    1081: `544`,
    1082: `544`,
    1083: `546`,
    1084: `546`,
    1085: `547`,
    1086: `548`,
    1087: `549`,
    1088: `549`,
    1089: `550`,
    109: `21`,
    1090: `550`,
    1091: `551`,
    1092: `551`,
    1093: `552`,
    1094: `554`,
    1095: `555`,
    1096: `556`,
    1097: `557`,
    1098: `557`,
    1099: `558`,
    11: `2`,
    110: `21`,
    1100: `559`,
    1101: `559`,
    1102: `559`,
    1103: `560`,
    1104: `561`,
    1105: `562`,
    1106: `563`,
    1107: `564`,
    1108: `565`,
    1109: `572`,
    111: `21`,
    1110: `572`,
    1111: `573`,
    1112: `573`,
    1113: `573`,
    1114: `576`,
    1115: `577`,
    1116: `577`,
    1117: `578`,
    1118: `578`,
    1119: `578`,
    112: `21`,
    1120: `578`,
    1121: `578`,
    1122: `578`,
    1123: `578`,
    1124: `578`,
    1125: `578`,
    1126: `578`,
    1127: `579`,
    1128: `579`,
    1129: `580`,
    113: `21`,
    1130: `581`,
    1131: `582`,
    1132: `582`,
    1133: `583`,
    1134: `583`,
    1135: `584`,
    1136: `584`,
    1137: `585`,
    1138: `585`,
    1139: `586`,
    114: `21`,
    1140: `587`,
    1141: `588`,
    1142: `588`,
    1143: `589`,
    1144: `590`,
    1145: `590`,
    1146: `590`,
    1147: `591`,
    1148: `592`,
    1149: `592`,
    115: `21`,
    1150: `593`,
    1151: `594`,
    1152: `594`,
    1153: `595`,
    1154: `596`,
    1155: `597`,
    1156: `597`,
    1157: `598`,
    1158: `599`,
    1159: `600`,
    116: `21`,
    1160: `600`,
    1161: `601`,
    1162: `602`,
    1163: `603`,
    1164: `603`,
    1165: `604`,
    1166: `605`,
    1167: `606`,
    1168: `606`,
    1169: `607`,
    117: `21`,
    1170: `607`,
    1171: `608`,
    1172: `608`,
    1173: `609`,
    1174: `610`,
    1175: `610`,
    1176: `611`,
    1177: `611`,
    1178: `612`,
    1179: `612`,
    118: `21`,
    1180: `613`,
    1181: `613`,
    1182: `613`,
    1183: `615`,
    1184: `615`,
    1185: `616`,
    1186: `616`,
    1187: `617`,
    1188: `618`,
    1189: `618`,
    119: `21`,
    1190: `619`,
    1191: `619`,
    1192: `620`,
    1193: `620`,
    1194: `621`,
    1195: `623`,
    1196: `624`,
    1197: `625`,
    1198: `626`,
    1199: `626`,
    12: `2`,
    120: `21`,
    1200: `627`,
    1201: `628`,
    1202: `628`,
    1203: `628`,
    1204: `629`,
    1205: `630`,
    1206: `631`,
    1207: `632`,
    1208: `633`,
    1209: `634`,
    121: `21`,
    1210: `641`,
    1211: `641`,
    1212: `642`,
    1213: `642`,
    1214: `643`,
    1215: `644`,
    1216: `652`,
    1217: `652`,
    1218: `653`,
    1219: `654`,
    122: `21`,
    1220: `654`,
    1221: `655`,
    1222: `655`,
    1223: `655`,
    1224: `656`,
    1225: `657`,
    1226: `657`,
    1227: `658`,
    1228: `659`,
    1229: `659`,
    123: `21`,
    1230: `659`,
    1231: `660`,
    1232: `661`,
    1233: `661`,
    1234: `662`,
    1235: `662`,
    1236: `662`,
    1237: `662`,
    1238: `662`,
    1239: `662`,
    124: `21`,
    1240: `662`,
    1241: `662`,
    1242: `662`,
    1243: `662`,
    1244: `663`,
    1245: `663`,
    1246: `664`,
    1247: `665`,
    1248: `666`,
    1249: `666`,
    125: `21`,
    1250: `667`,
    1251: `667`,
    1252: `668`,
    1253: `668`,
    1254: `669`,
    1255: `670`,
    1256: `670`,
    1257: `671`,
    1258: `672`,
    1259: `672`,
    126: `21`,
    1260: `672`,
    1261: `673`,
    1262: `674`,
    1263: `674`,
    1264: `675`,
    1265: `676`,
    1266: `676`,
    1267: `677`,
    1268: `678`,
    1269: `679`,
    127: `21`,
    1270: `679`,
    1271: `680`,
    1272: `681`,
    1273: `682`,
    1274: `682`,
    1275: `683`,
    1276: `684`,
    1277: `685`,
    1278: `685`,
    1279: `686`,
    128: `21`,
    1280: `687`,
    1281: `688`,
    1282: `688`,
    1283: `689`,
    1284: `689`,
    1285: `690`,
    1286: `690`,
    1287: `691`,
    1288: `691`,
    1289: `691`,
    129: `21`,
    1290: `693`,
    1291: `693`,
    1292: `694`,
    1293: `694`,
    1294: `695`,
    1295: `696`,
    1296: `703`,
    1297: `704`,
    1298: `704`,
    1299: `705`,
    13: `2`,
    130: `21`,
    1300: `705`,
    1301: `705`,
    1302: `705`,
    1303: `705`,
    1304: `705`,
    1305: `705`,
    1306: `705`,
    1307: `705`,
    1308: `705`,
    1309: `706`,
    131: `21`,
    1310: `706`,
    1311: `707`,
    1312: `708`,
    1313: `709`,
    1314: `709`,
    1315: `710`,
    1316: `710`,
    1317: `711`,
    1318: `711`,
    1319: `712`,
    132: `21`,
    1320: `713`,
    1321: `714`,
    1322: `715`,
    1323: `715`,
    1324: `716`,
    1325: `717`,
    1326: `717`,
    1327: `718`,
    1328: `719`,
    1329: `720`,
    133: `21`,
    1330: `720`,
    1331: `721`,
    1332: `722`,
    1333: `723`,
    1334: `723`,
    1335: `724`,
    1336: `725`,
    1337: `726`,
    1338: `726`,
    1339: `727`,
    134: `21`,
    1340: `728`,
    1341: `729`,
    1342: `729`,
    1343: `730`,
    1344: `730`,
    1345: `731`,
    1346: `731`,
    1347: `732`,
    1348: `732`,
    1349: `732`,
    135: `21`,
    1350: `734`,
    1351: `734`,
    1352: `735`,
    1353: `735`,
    1354: `736`,
    1355: `737`,
    1356: `745`,
    1357: `745`,
    1358: `746`,
    1359: `747`,
    136: `21`,
    1360: `747`,
    1361: `748`,
    1362: `748`,
    1363: `748`,
    1364: `749`,
    1365: `750`,
    1366: `750`,
    1367: `750`,
    1368: `751`,
    1369: `752`,
    137: `21`,
    1370: `752`,
    1371: `753`,
    1372: `753`,
    1373: `753`,
    1374: `753`,
    1375: `753`,
    1376: `753`,
    1377: `753`,
    1378: `753`,
    1379: `753`,
    138: `21`,
    1380: `753`,
    1381: `754`,
    1382: `754`,
    1383: `755`,
    1384: `756`,
    1385: `757`,
    1386: `757`,
    1387: `758`,
    1388: `758`,
    1389: `759`,
    139: `21`,
    1390: `759`,
    1391: `760`,
    1392: `761`,
    1393: `761`,
    1394: `762`,
    1395: `763`,
    1396: `763`,
    1397: `763`,
    1398: `764`,
    1399: `765`,
    14: `2`,
    140: `21`,
    1400: `765`,
    1401: `766`,
    1402: `767`,
    1403: `767`,
    1404: `768`,
    1405: `769`,
    1406: `770`,
    1407: `770`,
    1408: `771`,
    1409: `772`,
    141: `21`,
    1410: `773`,
    1411: `773`,
    1412: `774`,
    1413: `775`,
    1414: `776`,
    1415: `776`,
    1416: `777`,
    1417: `778`,
    1418: `779`,
    1419: `779`,
    142: `21`,
    1420: `780`,
    1421: `780`,
    1422: `781`,
    1423: `781`,
    1424: `782`,
    1425: `782`,
    1426: `782`,
    1427: `784`,
    1428: `784`,
    1429: `785`,
    143: `21`,
    1430: `785`,
    1431: `785`,
    1432: `786`,
    1433: `786`,
    1434: `787`,
    1435: `787`,
    1436: `788`,
    1437: `788`,
    1438: `789`,
    1439: `790`,
    144: `21`,
    1440: `791`,
    1441: `791`,
    1442: `792`,
    1443: `792`,
    1444: `793`,
    1445: `794`,
    1446: `794`,
    1447: `796`,
    1448: `797`,
    1449: `798`,
    145: `21`,
    1450: `798`,
    1451: `799`,
    1452: `799`,
    1453: `800`,
    1454: `801`,
    1455: `801`,
    1456: `801`,
    1457: `802`,
    1458: `803`,
    1459: `804`,
    146: `21`,
    1460: `805`,
    1461: `806`,
    1462: `813`,
    1463: `814`,
    1464: `814`,
    1465: `815`,
    1466: `815`,
    1467: `816`,
    1468: `817`,
    1469: `818`,
    147: `21`,
    1470: `818`,
    1471: `819`,
    1472: `819`,
    1473: `819`,
    1474: `822`,
    1475: `822`,
    1476: `823`,
    1477: `823`,
    1478: `824`,
    1479: `824`,
    148: `21`,
    1480: `824`,
    1481: `825`,
    1482: `826`,
    1483: `826`,
    1484: `827`,
    1485: `827`,
    1486: `828`,
    1487: `830`,
    1488: `831`,
    1489: `831`,
    149: `21`,
    1490: `832`,
    1491: `833`,
    1492: `834`,
    1493: `834`,
    1494: `835`,
    1495: `836`,
    1496: `836`,
    1497: `836`,
    1498: `837`,
    1499: `837`,
    15: `2`,
    150: `21`,
    1500: `837`,
    1501: `838`,
    1502: `838`,
    1503: `839`,
    1504: `839`,
    1505: `840`,
    1506: `841`,
    1507: `841`,
    1508: `842`,
    1509: `843`,
    151: `21`,
    1510: `843`,
    1511: `844`,
    1512: `844`,
    1513: `844`,
    1514: `845`,
    1515: `845`,
    1516: `846`,
    1517: `847`,
    1518: `848`,
    1519: `848`,
    152: `21`,
    1520: `849`,
    1521: `850`,
    1522: `851`,
    1523: `852`,
    1524: `852`,
    1525: `852`,
    1526: `854`,
    1527: `854`,
    1528: `855`,
    1529: `856`,
    153: `22`,
    1530: `856`,
    1531: `857`,
    1532: `858`,
    1533: `859`,
    1534: `860`,
    1535: `861`,
    1536: `862`,
    1537: `863`,
    1538: `864`,
    1539: `864`,
    154: `22`,
    1540: `865`,
    1541: `866`,
    1542: `866`,
    1543: `866`,
    1544: `867`,
    1545: `867`,
    1546: `867`,
    1547: `868`,
    1548: `869`,
    1549: `869`,
    155: `22`,
    1550: `870`,
    1551: `871`,
    1552: `872`,
    1553: `872`,
    1554: `872`,
    1555: `873`,
    1556: `874`,
    1557: `874`,
    1558: `875`,
    1559: `875`,
    156: `23`,
    1560: `875`,
    1561: `875`,
    1562: `875`,
    1563: `875`,
    1564: `875`,
    1565: `875`,
    1566: `875`,
    1567: `875`,
    1568: `876`,
    1569: `876`,
    157: `23`,
    1570: `877`,
    1571: `878`,
    1572: `878`,
    1573: `878`,
    1574: `879`,
    1575: `880`,
    1576: `881`,
    1577: `881`,
    1578: `882`,
    1579: `883`,
    158: `23`,
    1580: `883`,
    1581: `883`,
    1582: `884`,
    1583: `884`,
    1584: `885`,
    1585: `885`,
    1586: `886`,
    1587: `886`,
    1588: `886`,
    1589: `887`,
    159: `23`,
    1590: `887`,
    1591: `888`,
    1592: `888`,
    1593: `889`,
    1594: `890`,
    1595: `890`,
    1596: `892`,
    1597: `892`,
    1598: `893`,
    1599: `894`,
    16: `2`,
    160: `23`,
    1600: `894`,
    1601: `895`,
    1602: `896`,
    1603: `896`,
    1604: `896`,
    1605: `897`,
    1606: `898`,
    1607: `898`,
    1608: `899`,
    1609: `900`,
    161: `23`,
    1610: `900`,
    1611: `901`,
    1612: `902`,
    1613: `903`,
    1614: `903`,
    1615: `904`,
    1616: `905`,
    1617: `906`,
    1618: `906`,
    1619: `907`,
    162: `23`,
    1620: `908`,
    1621: `909`,
    1622: `909`,
    1623: `910`,
    1624: `911`,
    1625: `912`,
    1626: `912`,
    1627: `913`,
    1628: `913`,
    1629: `914`,
    163: `23`,
    1630: `914`,
    1631: `915`,
    1632: `916`,
    1633: `916`,
    1634: `917`,
    1635: `917`,
    1636: `918`,
    1637: `918`,
    1638: `919`,
    1639: `919`,
    164: `23`,
    1640: `919`,
    1641: `921`,
    1642: `921`,
    1643: `922`,
    1644: `923`,
    1645: `924`,
    1646: `924`,
    1647: `925`,
    1648: `926`,
    1649: `928`,
    165: `23`,
    1650: `929`,
    1651: `930`,
    1652: `931`,
    1653: `932`,
    1654: `932`,
    1655: `933`,
    1656: `934`,
    1657: `934`,
    1658: `934`,
    1659: `935`,
    166: `23`,
    1660: `935`,
    1661: `935`,
    1662: `936`,
    1663: `937`,
    1664: `937`,
    1665: `938`,
    1666: `938`,
    1667: `939`,
    1668: `939`,
    1669: `940`,
    167: `23`,
    1670: `941`,
    1671: `948`,
    1672: `948`,
    1673: `949`,
    1674: `949`,
    1675: `950`,
    1676: `951`,
    1677: `958`,
    1678: `958`,
    1679: `959`,
    168: `23`,
    1680: `959`,
    1681: `960`,
    1682: `960`,
    1683: `960`,
    1684: `961`,
    1685: `962`,
    1686: `962`,
    1687: `963`,
    1688: `963`,
    1689: `964`,
    169: `23`,
    1690: `966`,
    1691: `967`,
    1692: `967`,
    1693: `968`,
    1694: `969`,
    1695: `970`,
    1696: `970`,
    1697: `971`,
    1698: `972`,
    1699: `972`,
    17: `2`,
    170: `23`,
    1700: `972`,
    1701: `973`,
    1702: `973`,
    1703: `973`,
    1704: `974`,
    1705: `974`,
    1706: `975`,
    1707: `975`,
    1708: `976`,
    1709: `977`,
    171: `23`,
    1710: `977`,
    1711: `978`,
    1712: `979`,
    1713: `979`,
    1714: `980`,
    1715: `981`,
    1716: `982`,
    1717: `982`,
    1718: `983`,
    1719: `984`,
    172: `23`,
    1720: `985`,
    1721: `985`,
    1722: `986`,
    1723: `987`,
    1724: `988`,
    1725: `988`,
    1726: `989`,
    1727: `990`,
    1728: `991`,
    1729: `992`,
    173: `23`,
    1730: `992`,
    1731: `992`,
    1732: `993`,
    1733: `994`,
    1734: `994`,
    1735: `995`,
    1736: `995`,
    1737: `995`,
    1738: `995`,
    1739: `995`,
    174: `23`,
    1740: `995`,
    1741: `995`,
    1742: `995`,
    1743: `995`,
    1744: `995`,
    1745: `996`,
    1746: `996`,
    1747: `997`,
    1748: `998`,
    1749: `998`,
    175: `23`,
    1750: `998`,
    1751: `999`,
    1752: `1000`,
    1753: `1001`,
    1754: `1001`,
    1755: `1002`,
    1756: `1003`,
    1757: `1003`,
    1758: `1003`,
    1759: `1004`,
    176: `23`,
    1760: `1004`,
    1761: `1005`,
    1762: `1005`,
    1763: `1006`,
    1764: `1006`,
    1765: `1007`,
    1766: `1008`,
    1767: `1009`,
    1768: `1009`,
    1769: `1010`,
    177: `23`,
    1770: `1011`,
    1771: `1011`,
    1772: `1012`,
    1773: `1012`,
    1774: `1012`,
    1775: `1012`,
    1776: `1012`,
    1777: `1012`,
    1778: `1013`,
    1779: `1013`,
    178: `23`,
    1780: `1014`,
    1781: `1015`,
    1782: `1018`,
    1783: `1019`,
    1784: `1020`,
    1785: `1020`,
    1786: `1021`,
    1787: `1021`,
    1788: `1022`,
    1789: `1023`,
    179: `23`,
    1790: `1023`,
    1791: `1023`,
    1792: `1024`,
    1793: `1025`,
    1794: `1026`,
    1795: `1027`,
    1796: `1028`,
    1797: `1028`,
    1798: `1028`,
    1799: `1029`,
    18: `2`,
    180: `23`,
    1800: `1029`,
    1801: `1030`,
    1802: `1030`,
    1803: `1031`,
    1804: `1032`,
    1805: `1032`,
    1806: `1033`,
    1807: `1033`,
    1808: `1034`,
    1809: `1034`,
    181: `23`,
    1810: `1035`,
    1811: `1035`,
    1812: `1035`,
    1813: `1036`,
    1814: `1036`,
    1815: `1037`,
    1816: `1037`,
    1817: `1037`,
    1818: `1038`,
    1819: `1038`,
    182: `23`,
    1820: `1039`,
    1821: `1040`,
    1822: `1040`,
    1823: `1041`,
    1824: `1042`,
    1825: `1042`,
    1826: `1042`,
    1827: `1043`,
    1828: `1043`,
    1829: `1044`,
    183: `23`,
    1830: `1044`,
    1831: `1045`,
    1832: `1046`,
    1833: `1047`,
    1834: `1047`,
    1835: `1048`,
    1836: `1049`,
    1837: `1049`,
    1838: `1049`,
    1839: `1050`,
    184: `23`,
    1840: `1051`,
    1841: `1051`,
    1842: `1052`,
    1843: `1053`,
    1844: `1053`,
    1845: `1054`,
    1846: `1054`,
    1847: `1055`,
    1848: `1056`,
    1849: `1057`,
    185: `23`,
    1850: `1058`,
    1851: `1058`,
    1852: `1059`,
    1853: `1060`,
    1854: `1061`,
    1855: `1061`,
    1856: `1062`,
    1857: `1063`,
    1858: `1064`,
    1859: `1065`,
    186: `23`,
    1860: `1066`,
    1861: `1066`,
    1862: `1067`,
    1863: `1068`,
    1864: `1069`,
    1865: `1070`,
    1866: `1071`,
    1867: `1071`,
    1868: `1072`,
    1869: `1072`,
    187: `23`,
    1870: `1073`,
    1871: `1073`,
    1872: `1074`,
    1873: `1074`,
    1874: `1075`,
    1875: `1075`,
    1876: `1076`,
    1877: `1076`,
    1878: `1076`,
    1879: `1079`,
    188: `23`,
    1880: `1079`,
    1881: `1080`,
    1882: `1080`,
    1883: `1081`,
    1884: `1081`,
    1885: `1082`,
    1886: `1083`,
    1887: `1084`,
    1888: `1084`,
    1889: `1084`,
    189: `23`,
    1890: `1085`,
    1891: `1086`,
    1892: `1086`,
    1893: `1087`,
    1894: `1087`,
    1895: `1087`,
    1896: `1087`,
    1897: `1087`,
    1898: `1087`,
    1899: `1087`,
    19: `2`,
    190: `23`,
    1900: `1087`,
    1901: `1087`,
    1902: `1087`,
    1903: `1088`,
    1904: `1088`,
    1905: `1089`,
    1906: `1090`,
    1907: `1091`,
    1908: `1091`,
    1909: `1092`,
    191: `23`,
    1910: `1092`,
    1911: `1093`,
    1912: `1093`,
    1913: `1094`,
    1914: `1095`,
    1915: `1095`,
    1916: `1096`,
    1917: `1097`,
    1918: `1097`,
    1919: `1097`,
    192: `23`,
    1920: `1098`,
    1921: `1099`,
    1922: `1099`,
    1923: `1100`,
    1924: `1101`,
    1925: `1101`,
    1926: `1102`,
    1927: `1103`,
    1928: `1104`,
    1929: `1104`,
    193: `23`,
    1930: `1105`,
    1931: `1106`,
    1932: `1107`,
    1933: `1107`,
    1934: `1108`,
    1935: `1109`,
    1936: `1110`,
    1937: `1110`,
    1938: `1111`,
    1939: `1112`,
    194: `23`,
    1940: `1113`,
    1941: `1113`,
    1942: `1114`,
    1943: `1114`,
    1944: `1115`,
    1945: `1115`,
    1946: `1116`,
    1947: `1116`,
    1948: `1116`,
    1949: `1118`,
    195: `23`,
    1950: `1118`,
    1951: `1119`,
    1952: `1119`,
    1953: `1120`,
    1954: `1120`,
    1955: `1121`,
    1956: `1122`,
    1957: `1123`,
    1958: `1123`,
    1959: `1124`,
    196: `23`,
    1960: `1124`,
    1961: `1125`,
    1962: `1125`,
    1963: `1125`,
    1964: `1126`,
    1965: `1126`,
    1966: `1127`,
    1967: `1127`,
    1968: `1127`,
    1969: `1127`,
    197: `23`,
    1970: `1127`,
    1971: `1127`,
    1972: `1128`,
    1973: `1128`,
    1974: `1129`,
    1975: `1130`,
    1976: `1131`,
    1977: `1131`,
    1978: `1132`,
    1979: `1133`,
    198: `25`,
    1980: `1135`,
    1981: `1135`,
    1982: `1136`,
    1983: `1136`,
    1984: `1136`,
    1985: `1137`,
    1986: `1137`,
    1987: `1137`,
    1988: `1137`,
    1989: `1137`,
    199: `27`,
    1990: `1137`,
    1991: `1137`,
    1992: `1137`,
    1993: `1137`,
    1994: `1137`,
    1995: `1137`,
    1996: `1137`,
    1997: `1137`,
    1998: `1137`,
    1999: `1137`,
    2: `2`,
    20: `2`,
    200: `27`,
    2000: `1137`,
    2001: `1137`,
    2002: `1137`,
    2003: `1137`,
    2004: `1137`,
    2005: `1137`,
    2006: `1137`,
    2007: `1137`,
    2008: `1137`,
    2009: `1137`,
    201: `27`,
    2010: `1137`,
    2011: `1137`,
    2012: `1137`,
    2013: `1137`,
    2014: `1137`,
    2015: `1137`,
    2016: `1137`,
    2017: `1137`,
    2018: `1137`,
    2019: `1137`,
    202: `28`,
    2020: `1137`,
    2021: `1137`,
    2022: `1137`,
    2023: `1137`,
    2024: `1137`,
    2025: `1137`,
    2026: `1137`,
    2027: `1137`,
    2028: `1137`,
    2029: `1137`,
    203: `28`,
    2030: `1137`,
    2031: `1137`,
    2032: `1137`,
    2033: `1137`,
    2034: `1137`,
    2035: `1137`,
    2036: `1137`,
    2037: `1137`,
    2038: `1137`,
    2039: `1137`,
    204: `30`,
    2040: `1137`,
    2041: `1137`,
    2042: `1137`,
    2043: `1137`,
    2044: `1137`,
    2045: `1138`,
    2046: `1138`,
    2047: `1139`,
    2048: `1140`,
    2049: `1140`,
    205: `31`,
    2050: `1141`,
    2051: `1141`,
    2052: `1142`,
    2053: `1142`,
    2054: `1143`,
    2055: `1143`,
    2056: `1143`,
    2057: `1145`,
    2058: `1145`,
    2059: `1145`,
    206: `32`,
    2060: `1146`,
    2061: `1146`,
    2062: `1146`,
    2063: `1146`,
    2064: `1147`,
    2065: `1147`,
    2066: `1147`,
    2067: `1148`,
    2068: `1148`,
    2069: `1148`,
    207: `33`,
    2070: `1149`,
    2071: `1149`,
    2072: `1150`,
    2073: `1150`,
    2074: `1150`,
    2075: `1152`,
    2076: `1152`,
    2077: `1152`,
    2078: `1153`,
    2079: `1153`,
    208: `33`,
    2080: `1153`,
    2081: `1154`,
    2082: `1154`,
    2083: `1155`,
    2084: `1155`,
    2085: `1155`,
    2086: `1157`,
    2087: `1158`,
    2088: `1158`,
    2089: `1159`,
    209: `34`,
    2090: `1160`,
    2091: `1161`,
    2092: `1162`,
    2093: `1162`,
    2094: `1163`,
    2095: `1164`,
    2096: `1165`,
    2097: `1166`,
    2098: `1166`,
    2099: `1167`,
    21: `2`,
    210: `35`,
    2100: `1168`,
    2101: `1169`,
    2102: `1170`,
    2103: `1170`,
    2104: `1171`,
    2105: `1172`,
    2106: `1173`,
    2107: `1173`,
    2108: `1173`,
    2109: `1174`,
    211: `35`,
    2110: `1174`,
    2111: `1174`,
    2112: `1175`,
    2113: `1176`,
    2114: `1177`,
    2115: `1178`,
    2116: `1178`,
    2117: `1178`,
    2118: `1180`,
    2119: `1180`,
    212: `36`,
    2120: `1180`,
    2121: `1182`,
    2122: `1182`,
    2123: `1183`,
    2124: `1183`,
    2125: `1183`,
    2126: `1184`,
    2127: `1184`,
    2128: `1185`,
    2129: `1185`,
    213: `37`,
    2130: `1185`,
    2131: `1187`,
    2132: `1187`,
    2133: `1188`,
    2134: `1188`,
    2135: `1188`,
    2136: `1189`,
    2137: `1189`,
    2138: `1190`,
    2139: `1190`,
    214: `38`,
    2140: `1190`,
    2141: `1192`,
    2142: `1192`,
    2143: `1192`,
    2144: `1194`,
    2145: `1194`,
    2146: `1195`,
    2147: `1195`,
    2148: `1196`,
    2149: `1196`,
    215: `39`,
    2150: `1196`,
    2151: `1198`,
    2152: `1198`,
    2153: `1199`,
    2154: `1199`,
    2155: `1200`,
    2156: `1200`,
    2157: `1201`,
    2158: `1202`,
    2159: `1203`,
    216: `39`,
    2160: `1203`,
    2161: `1203`,
    2162: `1204`,
    2163: `1204`,
    2164: `1205`,
    2165: `1205`,
    2166: `1206`,
    2167: `1207`,
    2168: `1207`,
    2169: `1208`,
    217: `41`,
    2170: `1208`,
    2171: `1209`,
    2172: `1209`,
    2173: `1210`,
    2174: `1210`,
    2175: `1210`,
    2176: `1211`,
    2177: `1211`,
    2178: `1212`,
    2179: `1212`,
    218: `42`,
    2180: `1212`,
    2181: `1213`,
    2182: `1213`,
    2183: `1214`,
    2184: `1215`,
    2185: `1215`,
    2186: `1216`,
    2187: `1217`,
    2188: `1217`,
    2189: `1217`,
    219: `42`,
    2190: `1218`,
    2191: `1218`,
    2192: `1219`,
    2193: `1219`,
    2194: `1220`,
    2195: `1221`,
    2196: `1222`,
    2197: `1222`,
    2198: `1223`,
    2199: `1224`,
    22: `2`,
    220: `43`,
    2200: `1224`,
    2201: `1224`,
    2202: `1225`,
    2203: `1226`,
    2204: `1226`,
    2205: `1227`,
    2206: `1228`,
    2207: `1228`,
    2208: `1229`,
    2209: `1229`,
    221: `44`,
    2210: `1230`,
    2211: `1231`,
    2212: `1232`,
    2213: `1233`,
    2214: `1233`,
    2215: `1234`,
    2216: `1235`,
    2217: `1236`,
    2218: `1236`,
    2219: `1237`,
    222: `45`,
    2220: `1238`,
    2221: `1239`,
    2222: `1240`,
    2223: `1241`,
    2224: `1241`,
    2225: `1242`,
    2226: `1243`,
    2227: `1244`,
    2228: `1244`,
    2229: `1245`,
    223: `45`,
    2230: `1245`,
    2231: `1246`,
    2232: `1246`,
    2233: `1247`,
    2234: `1247`,
    2235: `1248`,
    2236: `1248`,
    2237: `1249`,
    2238: `1249`,
    2239: `1249`,
    224: `45`,
    2240: `1251`,
    2241: `1251`,
    2242: `1252`,
    2243: `1253`,
    2244: `1253`,
    2245: `1254`,
    2246: `1255`,
    2247: `1255`,
    2248: `1256`,
    2249: `1256`,
    225: `46`,
    2250: `1257`,
    2251: `1258`,
    2252: `1259`,
    2253: `1259`,
    2254: `1259`,
    2255: `1260`,
    2256: `1260`,
    2257: `1261`,
    2258: `1261`,
    2259: `1262`,
    226: `46`,
    2260: `1263`,
    2261: `1264`,
    2262: `1264`,
    2263: `1265`,
    2264: `1266`,
    2265: `1266`,
    2266: `1266`,
    2267: `1267`,
    2268: `1268`,
    2269: `1268`,
    227: `47`,
    2270: `1269`,
    2271: `1270`,
    2272: `1270`,
    2273: `1271`,
    2274: `1271`,
    2275: `1272`,
    2276: `1273`,
    2277: `1274`,
    2278: `1275`,
    2279: `1275`,
    228: `48`,
    2280: `1276`,
    2281: `1277`,
    2282: `1278`,
    2283: `1278`,
    2284: `1279`,
    2285: `1280`,
    2286: `1281`,
    2287: `1282`,
    2288: `1283`,
    2289: `1283`,
    229: `49`,
    2290: `1284`,
    2291: `1285`,
    2292: `1286`,
    2293: `1287`,
    2294: `1288`,
    2295: `1288`,
    2296: `1289`,
    2297: `1289`,
    2298: `1290`,
    2299: `1290`,
    23: `2`,
    230: `49`,
    2300: `1291`,
    2301: `1291`,
    2302: `1292`,
    2303: `1292`,
    2304: `1293`,
    2305: `1293`,
    2306: `1293`,
    2307: `1295`,
    2308: `1295`,
    2309: `1296`,
    231: `50`,
    2310: `1297`,
    2311: `1297`,
    2312: `1298`,
    2313: `1299`,
    2314: `1299`,
    2315: `1300`,
    2316: `1300`,
    2317: `1301`,
    2318: `1302`,
    2319: `1303`,
    232: `50`,
    2320: `1303`,
    2321: `1303`,
    2322: `1304`,
    2323: `1304`,
    2324: `1305`,
    2325: `1305`,
    2326: `1306`,
    2327: `1307`,
    2328: `1308`,
    2329: `1308`,
    233: `51`,
    2330: `1309`,
    2331: `1310`,
    2332: `1310`,
    2333: `1310`,
    2334: `1311`,
    2335: `1312`,
    2336: `1312`,
    2337: `1313`,
    2338: `1314`,
    2339: `1314`,
    234: `51`,
    2340: `1315`,
    2341: `1315`,
    2342: `1316`,
    2343: `1317`,
    2344: `1318`,
    2345: `1319`,
    2346: `1319`,
    2347: `1320`,
    2348: `1321`,
    2349: `1322`,
    235: `51`,
    2350: `1322`,
    2351: `1323`,
    2352: `1324`,
    2353: `1325`,
    2354: `1326`,
    2355: `1327`,
    2356: `1327`,
    2357: `1328`,
    2358: `1329`,
    2359: `1330`,
    236: `52`,
    2360: `1330`,
    2361: `1331`,
    2362: `1331`,
    2363: `1332`,
    2364: `1332`,
    2365: `1333`,
    2366: `1333`,
    2367: `1334`,
    2368: `1334`,
    2369: `1335`,
    237: `52`,
    2370: `1335`,
    2371: `1335`,
    2372: `1337`,
    2373: `1337`,
    2374: `1339`,
    2375: `1339`,
    2376: `1340`,
    2377: `1340`,
    2378: `1340`,
    2379: `1341`,
    238: `53`,
    2380: `1341`,
    2381: `1342`,
    2382: `1343`,
    2383: `1343`,
    2384: `1344`,
    2385: `1345`,
    2386: `1346`,
    2387: `1346`,
    2388: `1347`,
    2389: `1348`,
    239: `53`,
    2390: `1349`,
    2391: `1351`,
    2392: `1352`,
    2393: `1352`,
    2394: `1353`,
    2395: `1353`,
    2396: `1354`,
    2397: `1354`,
    2398: `1354`,
    2399: `1356`,
    24: `2`,
    240: `53`,
    2400: `1356`,
    2401: `1357`,
    2402: `1357`,
    2403: `1358`,
    2404: `1359`,
    2405: `1361`,
    2406: `1361`,
    2407: `1361`,
    2408: `1363`,
    2409: `1363`,
    241: `53`,
    2410: `1364`,
    2411: `1365`,
    2412: `1365`,
    2413: `1366`,
    2414: `1367`,
    2415: `1369`,
    2416: `1370`,
    2417: `1370`,
    2418: `1371`,
    2419: `1371`,
    242: `53`,
    2420: `1372`,
    2421: `1372`,
    2422: `1372`,
    2423: `1373`,
    2424: `1373`,
    2425: `1373`,
    2426: `1375`,
    2427: `1376`,
    2428: `1377`,
    2429: `1378`,
    243: `53`,
    2430: `1379`,
    2431: `1381`,
    2432: `1382`,
    2433: `1382`,
    2434: `1383`,
    2435: `1384`,
    2436: `1384`,
    2437: `1385`,
    2438: `1385`,
    2439: `1386`,
    244: `54`,
    2440: `1386`,
    2441: `1387`,
    2442: `1388`,
    2443: `1390`,
    2444: `1390`,
    2445: `1390`,
    2446: `1392`,
    2447: `1392`,
    2448: `1392`,
    2449: `1394`,
    245: `54`,
    2450: `1394`,
    2451: `1395`,
    2452: `1395`,
    2453: `1395`,
    2454: `1396`,
    2455: `1396`,
    2456: `1397`,
    2457: `1397`,
    2458: `1397`,
    2459: `1399`,
    246: `55`,
    2460: `1399`,
    2461: `1399`,
    2462: `1401`,
    2463: `1402`,
    2464: `1404`,
    2465: `1405`,
    2466: `1406`,
    2467: `1407`,
    2468: `1407`,
    2469: `1408`,
    247: `56`,
    2470: `1408`,
    2471: `1409`,
    2472: `1409`,
    2473: `1409`,
    2474: `1410`,
    2475: `1412`,
    2476: `1413`,
    2477: `1414`,
    2478: `1414`,
    2479: `1414`,
    248: `57`,
    2480: `1415`,
    2481: `1416`,
    2482: `1416`,
    2483: `1417`,
    2484: `1417`,
    2485: `1417`,
    2486: `1418`,
    2487: `1420`,
    2488: `1421`,
    2489: `1422`,
    249: `57`,
    2490: `1423`,
    2491: `1423`,
    2492: `1423`,
    2493: `1424`,
    2494: `1424`,
    2495: `1425`,
    2496: `1426`,
    2497: `1427`,
    2498: `1429`,
    2499: `1430`,
    25: `2`,
    250: `58`,
    2500: `1430`,
    2501: `1430`,
    2502: `1431`,
    2503: `1431`,
    2504: `1432`,
    2505: `1433`,
    2506: `1433`,
    2507: `1433`,
    2508: `1434`,
    2509: `1434`,
    251: `59`,
    2510: `1435`,
    2511: `1436`,
    2512: `1436`,
    2513: `1437`,
    2514: `1438`,
    2515: `1438`,
    2516: `1439`,
    2517: `1440`,
    2518: `1440`,
    2519: `1441`,
    252: `61`,
    2520: `1442`,
    2521: `1442`,
    2522: `1443`,
    2523: `1444`,
    2524: `1444`,
    2525: `1444`,
    2526: `1445`,
    2527: `1446`,
    2528: `1446`,
    2529: `1447`,
    253: `61`,
    2530: `1448`,
    2531: `1448`,
    2532: `1448`,
    2533: `1449`,
    2534: `1449`,
    2535: `1450`,
    2536: `1451`,
    2537: `1451`,
    2538: `1452`,
    2539: `1453`,
    254: `62`,
    2540: `1453`,
    2541: `1454`,
    2542: `1455`,
    2543: `1455`,
    2544: `1456`,
    2545: `1457`,
    2546: `1457`,
    2547: `1458`,
    2548: `1459`,
    2549: `1459`,
    255: `62`,
    2550: `1460`,
    2551: `1461`,
    2552: `1461`,
    2553: `1462`,
    2554: `1462`,
    2555: `1463`,
    2556: `1464`,
    2557: `1464`,
    2558: `1465`,
    2559: `1467`,
    256: `62`,
    2560: `1468`,
    2561: `1469`,
    2562: `1470`,
    2563: `1470`,
    2564: `1470`,
    2565: `1471`,
    2566: `1471`,
    2567: `1472`,
    2568: `1472`,
    2569: `1472`,
    257: `63`,
    2570: `1473`,
    2571: `1473`,
    2572: `1473`,
    2573: `1475`,
    2574: `1476`,
    2575: `1476`,
    2576: `1476`,
    2577: `1477`,
    2578: `1478`,
    2579: `1479`,
    258: `63`,
    2580: `1480`,
    2581: `1481`,
    2582: `1483`,
    2583: `1484`,
    2584: `1484`,
    2585: `1484`,
    2586: `1486`,
    2587: `1487`,
    2588: `1488`,
    2589: `1488`,
    259: `64`,
    2590: `1489`,
    2591: `1491`,
    2592: `1491`,
    2593: `1492`,
    2594: `1493`,
    2595: `1493`,
    2596: `1494`,
    2597: `1497`,
    2598: `1497`,
    2599: `1498`,
    26: `2`,
    260: `65`,
    2600: `1498`,
    2601: `1499`,
    2602: `1500`,
    2603: `1501`,
    2604: `1502`,
    2605: `1502`,
    2606: `1503`,
    2607: `1504`,
    2608: `1504`,
    2609: `1505`,
    261: `66`,
    2610: `1505`,
    2611: `1506`,
    2612: `1506`,
    2613: `1507`,
    2614: `1508`,
    2615: `1509`,
    2616: `1509`,
    2617: `1510`,
    2618: `1511`,
    2619: `1512`,
    262: `66`,
    2620: `1513`,
    2621: `1513`,
    2622: `1514`,
    2623: `1515`,
    2624: `1516`,
    2625: `1518`,
    2626: `1519`,
    2627: `1519`,
    2628: `1520`,
    2629: `1522`,
    263: `66`,
    2630: `1523`,
    2631: `1524`,
    2632: `1525`,
    2633: `1526`,
    2634: `1526`,
    2635: `1527`,
    2636: `1528`,
    2637: `1529`,
    2638: `1530`,
    2639: `1532`,
    264: `66`,
    2640: `1532`,
    2641: `1533`,
    2642: `1533`,
    2643: `1534`,
    2644: `1535`,
    2645: `1536`,
    2646: `1536`,
    2647: `1536`,
    2648: `1537`,
    2649: `1537`,
    265: `66`,
    2650: `1537`,
    2651: `1539`,
    2652: `1539`,
    2653: `1540`,
    2654: `1541`,
    2655: `1541`,
    2656: `1542`,
    266: `66`,
    267: `66`,
    268: `66`,
    269: `66`,
    27: `2`,
    270: `66`,
    271: `66`,
    272: `66`,
    273: `66`,
    274: `66`,
    275: `66`,
    276: `66`,
    277: `66`,
    278: `66`,
    279: `67`,
    28: `2`,
    280: `67`,
    281: `67`,
    282: `69`,
    283: `69`,
    284: `69`,
    285: `70`,
    286: `71`,
    287: `71`,
    288: `73`,
    289: `74`,
    29: `2`,
    290: `75`,
    291: `76`,
    292: `76`,
    293: `77`,
    294: `78`,
    295: `79`,
    296: `79`,
    297: `80`,
    298: `81`,
    299: `82`,
    3: `2`,
    30: `4`,
    300: `83`,
    301: `83`,
    302: `84`,
    303: `84`,
    304: `84`,
    305: `86`,
    306: `86`,
    307: `86`,
    308: `87`,
    309: `87`,
    31: `4`,
    310: `87`,
    311: `88`,
    312: `89`,
    313: `89`,
    314: `90`,
    315: `90`,
    316: `92`,
    317: `93`,
    318: `94`,
    319: `95`,
    32: `5`,
    320: `95`,
    321: `96`,
    322: `96`,
    323: `97`,
    324: `98`,
    325: `99`,
    326: `100`,
    327: `101`,
    328: `102`,
    329: `103`,
    33: `5`,
    330: `104`,
    331: `104`,
    332: `105`,
    333: `105`,
    334: `105`,
    335: `108`,
    336: `108`,
    337: `108`,
    338: `108`,
    339: `108`,
    34: `5`,
    340: `108`,
    341: `108`,
    342: `108`,
    343: `108`,
    344: `108`,
    345: `108`,
    346: `108`,
    347: `108`,
    348: `108`,
    349: `108`,
    35: `6`,
    350: `108`,
    351: `108`,
    352: `108`,
    353: `108`,
    354: `108`,
    355: `108`,
    356: `108`,
    357: `108`,
    358: `108`,
    359: `108`,
    36: `7`,
    360: `108`,
    361: `108`,
    362: `108`,
    363: `108`,
    364: `108`,
    365: `108`,
    366: `108`,
    367: `108`,
    368: `108`,
    369: `108`,
    37: `8`,
    370: `108`,
    371: `108`,
    372: `108`,
    373: `108`,
    374: `108`,
    375: `108`,
    376: `108`,
    377: `108`,
    378: `108`,
    379: `108`,
    38: `9`,
    380: `108`,
    381: `108`,
    382: `108`,
    383: `108`,
    384: `108`,
    385: `108`,
    386: `108`,
    387: `108`,
    388: `108`,
    389: `108`,
    39: `10`,
    390: `108`,
    391: `108`,
    392: `108`,
    393: `108`,
    394: `109`,
    395: `109`,
    396: `110`,
    397: `110`,
    398: `110`,
    399: `112`,
    4: `2`,
    40: `11`,
    400: `112`,
    401: `112`,
    402: `113`,
    403: `113`,
    404: `115`,
    405: `116`,
    406: `117`,
    407: `117`,
    408: `118`,
    409: `118`,
    41: `11`,
    410: `119`,
    411: `120`,
    412: `120`,
    413: `121`,
    414: `122`,
    415: `123`,
    416: `124`,
    417: `124`,
    418: `125`,
    419: `125`,
    42: `12`,
    420: `125`,
    421: `127`,
    422: `127`,
    423: `127`,
    424: `128`,
    425: `128`,
    426: `128`,
    427: `129`,
    428: `130`,
    429: `130`,
    43: `13`,
    430: `130`,
    431: `131`,
    432: `132`,
    433: `132`,
    434: `133`,
    435: `133`,
    436: `134`,
    437: `134`,
    438: `136`,
    439: `137`,
    44: `14`,
    440: `138`,
    441: `138`,
    442: `138`,
    443: `139`,
    444: `139`,
    445: `140`,
    446: `140`,
    447: `141`,
    448: `142`,
    449: `143`,
    45: `14`,
    450: `143`,
    451: `144`,
    452: `145`,
    453: `146`,
    454: `147`,
    455: `148`,
    456: `148`,
    457: `149`,
    458: `149`,
    459: `149`,
    46: `15`,
    460: `151`,
    461: `151`,
    462: `151`,
    463: `152`,
    464: `152`,
    465: `154`,
    466: `154`,
    467: `155`,
    468: `156`,
    469: `157`,
    47: `16`,
    470: `160`,
    471: `160`,
    472: `160`,
    473: `162`,
    474: `163`,
    475: `164`,
    476: `165`,
    477: `165`,
    478: `166`,
    479: `167`,
    48: `17`,
    480: `167`,
    481: `167`,
    482: `168`,
    483: `169`,
    484: `170`,
    485: `171`,
    486: `172`,
    487: `173`,
    488: `173`,
    489: `173`,
    49: `18`,
    490: `174`,
    491: `174`,
    492: `176`,
    493: `176`,
    494: `177`,
    495: `178`,
    496: `179`,
    497: `182`,
    498: `182`,
    499: `182`,
    5: `2`,
    50: `19`,
    500: `182`,
    501: `182`,
    502: `182`,
    503: `183`,
    504: `183`,
    505: `184`,
    506: `185`,
    507: `187`,
    508: `188`,
    509: `191`,
    51: `21`,
    510: `191`,
    511: `192`,
    512: `193`,
    513: `194`,
    514: `197`,
    515: `197`,
    516: `197`,
    517: `198`,
    518: `198`,
    519: `199`,
    52: `21`,
    520: `200`,
    521: `200`,
    522: `201`,
    523: `201`,
    524: `201`,
    525: `203`,
    526: `203`,
    527: `203`,
    528: `204`,
    529: `204`,
    53: `21`,
    530: `204`,
    531: `205`,
    532: `206`,
    533: `206`,
    534: `207`,
    535: `207`,
    536: `209`,
    537: `209`,
    538: `210`,
    539: `211`,
    54: `21`,
    540: `212`,
    541: `215`,
    542: `215`,
    543: `215`,
    544: `216`,
    545: `216`,
    546: `217`,
    547: `219`,
    548: `220`,
    549: `220`,
    55: `21`,
    550: `221`,
    551: `222`,
    552: `223`,
    553: `223`,
    554: `224`,
    555: `224`,
    556: `225`,
    557: `226`,
    558: `227`,
    559: `228`,
    56: `21`,
    560: `228`,
    561: `228`,
    562: `229`,
    563: `229`,
    564: `229`,
    565: `230`,
    566: `230`,
    567: `230`,
    568: `231`,
    569: `231`,
    57: `21`,
    570: `232`,
    571: `232`,
    572: `232`,
    573: `234`,
    574: `234`,
    575: `234`,
    576: `235`,
    577: `235`,
    578: `237`,
    579: `237`,
    58: `21`,
    580: `238`,
    581: `239`,
    582: `240`,
    583: `243`,
    584: `243`,
    585: `243`,
    586: `245`,
    587: `246`,
    588: `247`,
    589: `247`,
    59: `21`,
    590: `248`,
    591: `248`,
    592: `249`,
    593: `250`,
    594: `250`,
    595: `250`,
    596: `251`,
    597: `252`,
    598: `253`,
    599: `254`,
    6: `2`,
    60: `21`,
    600: `255`,
    601: `256`,
    602: `256`,
    603: `256`,
    604: `257`,
    605: `257`,
    606: `258`,
    607: `258`,
    608: `258`,
    609: `261`,
    61: `21`,
    610: `261`,
    611: `262`,
    612: `263`,
    613: `264`,
    614: `267`,
    615: `267`,
    616: `267`,
    617: `268`,
    618: `268`,
    619: `269`,
    62: `21`,
    620: `270`,
    621: `270`,
    622: `271`,
    623: `271`,
    624: `271`,
    625: `274`,
    626: `274`,
    627: `275`,
    628: `276`,
    629: `277`,
    63: `21`,
    630: `280`,
    631: `280`,
    632: `280`,
    633: `281`,
    634: `281`,
    635: `282`,
    636: `283`,
    637: `283`,
    638: `284`,
    639: `284`,
    64: `21`,
    640: `284`,
    641: `287`,
    642: `287`,
    643: `288`,
    644: `289`,
    645: `290`,
    646: `293`,
    647: `293`,
    648: `293`,
    649: `294`,
    65: `21`,
    650: `294`,
    651: `295`,
    652: `296`,
    653: `296`,
    654: `297`,
    655: `297`,
    656: `297`,
    657: `300`,
    658: `300`,
    659: `301`,
    66: `21`,
    660: `302`,
    661: `303`,
    662: `306`,
    663: `306`,
    664: `306`,
    665: `307`,
    666: `307`,
    667: `308`,
    668: `309`,
    669: `309`,
    67: `21`,
    670: `310`,
    671: `310`,
    672: `310`,
    673: `312`,
    674: `312`,
    675: `312`,
    676: `313`,
    677: `313`,
    678: `315`,
    679: `315`,
    68: `21`,
    680: `316`,
    681: `317`,
    682: `318`,
    683: `321`,
    684: `321`,
    685: `321`,
    686: `322`,
    687: `323`,
    688: `325`,
    689: `326`,
    69: `21`,
    690: `327`,
    691: `328`,
    692: `329`,
    693: `329`,
    694: `330`,
    695: `331`,
    696: `331`,
    697: `331`,
    698: `332`,
    699: `332`,
    7: `2`,
    70: `21`,
    700: `332`,
    701: `333`,
    702: `333`,
    703: `334`,
    704: `334`,
    705: `334`,
    706: `336`,
    707: `336`,
    708: `336`,
    709: `337`,
    71: `21`,
    710: `337`,
    711: `337`,
    712: `338`,
    713: `339`,
    714: `339`,
    715: `340`,
    716: `340`,
    717: `342`,
    718: `342`,
    719: `343`,
    72: `21`,
    720: `344`,
    721: `345`,
    722: `348`,
    723: `348`,
    724: `348`,
    725: `349`,
    726: `349`,
    727: `350`,
    728: `352`,
    729: `353`,
    73: `21`,
    730: `353`,
    731: `354`,
    732: `355`,
    733: `356`,
    734: `356`,
    735: `357`,
    736: `357`,
    737: `358`,
    738: `359`,
    739: `360`,
    74: `21`,
    740: `361`,
    741: `361`,
    742: `361`,
    743: `362`,
    744: `362`,
    745: `362`,
    746: `363`,
    747: `363`,
    748: `363`,
    749: `364`,
    75: `21`,
    750: `364`,
    751: `365`,
    752: `365`,
    753: `365`,
    754: `367`,
    755: `367`,
    756: `367`,
    757: `368`,
    758: `369`,
    759: `369`,
    76: `21`,
    760: `369`,
    761: `370`,
    762: `371`,
    763: `371`,
    764: `372`,
    765: `372`,
    766: `374`,
    767: `375`,
    768: `376`,
    769: `376`,
    77: `21`,
    770: `376`,
    771: `377`,
    772: `377`,
    773: `378`,
    774: `379`,
    775: `379`,
    776: `380`,
    777: `381`,
    778: `382`,
    779: `383`,
    78: `21`,
    780: `383`,
    781: `384`,
    782: `385`,
    783: `386`,
    784: `386`,
    785: `387`,
    786: `387`,
    787: `387`,
    788: `390`,
    789: `390`,
    79: `21`,
    790: `390`,
    791: `390`,
    792: `390`,
    793: `390`,
    794: `390`,
    795: `390`,
    796: `390`,
    797: `390`,
    798: `390`,
    799: `390`,
    8: `2`,
    80: `21`,
    800: `390`,
    801: `390`,
    802: `390`,
    803: `390`,
    804: `390`,
    805: `390`,
    806: `390`,
    807: `390`,
    808: `390`,
    809: `390`,
    81: `21`,
    810: `390`,
    811: `390`,
    812: `390`,
    813: `390`,
    814: `390`,
    815: `390`,
    816: `390`,
    817: `390`,
    818: `390`,
    819: `390`,
    82: `21`,
    820: `390`,
    821: `390`,
    822: `390`,
    823: `390`,
    824: `390`,
    825: `390`,
    826: `390`,
    827: `390`,
    828: `390`,
    829: `390`,
    83: `21`,
    830: `390`,
    831: `390`,
    832: `390`,
    833: `390`,
    834: `390`,
    835: `390`,
    836: `390`,
    837: `390`,
    838: `390`,
    839: `390`,
    84: `21`,
    840: `390`,
    841: `390`,
    842: `390`,
    843: `390`,
    844: `390`,
    845: `390`,
    846: `390`,
    847: `391`,
    848: `391`,
    849: `392`,
    85: `21`,
    850: `392`,
    851: `392`,
    852: `394`,
    853: `394`,
    854: `395`,
    855: `395`,
    856: `396`,
    857: `398`,
    858: `399`,
    859: `400`,
    86: `21`,
    860: `401`,
    861: `401`,
    862: `402`,
    863: `403`,
    864: `403`,
    865: `403`,
    866: `404`,
    867: `405`,
    868: `406`,
    869: `407`,
    87: `21`,
    870: `408`,
    871: `409`,
    872: `417`,
    873: `417`,
    874: `418`,
    875: `419`,
    876: `419`,
    877: `420`,
    878: `420`,
    879: `420`,
    88: `21`,
    880: `421`,
    881: `422`,
    882: `423`,
    883: `423`,
    884: `423`,
    885: `424`,
    886: `425`,
    887: `425`,
    888: `426`,
    889: `426`,
    89: `21`,
    890: `426`,
    891: `426`,
    892: `426`,
    893: `426`,
    894: `426`,
    895: `426`,
    896: `426`,
    897: `426`,
    898: `427`,
    899: `427`,
    9: `2`,
    90: `21`,
    900: `428`,
    901: `429`,
    902: `430`,
    903: `430`,
    904: `431`,
    905: `431`,
    906: `432`,
    907: `432`,
    908: `433`,
    909: `434`,
    91: `21`,
    910: `434`,
    911: `435`,
    912: `436`,
    913: `436`,
    914: `436`,
    915: `437`,
    916: `438`,
    917: `438`,
    918: `439`,
    919: `440`,
    92: `21`,
    920: `440`,
    921: `441`,
    922: `442`,
    923: `443`,
    924: `443`,
    925: `444`,
    926: `445`,
    927: `446`,
    928: `446`,
    929: `447`,
    93: `21`,
    930: `448`,
    931: `449`,
    932: `449`,
    933: `450`,
    934: `451`,
    935: `452`,
    936: `452`,
    937: `453`,
    938: `453`,
    939: `454`,
    94: `21`,
    940: `454`,
    941: `456`,
    942: `456`,
    943: `457`,
    944: `457`,
    945: `457`,
    946: `458`,
    947: `459`,
    948: `459`,
    949: `459`,
    95: `21`,
    950: `460`,
    951: `460`,
    952: `461`,
    953: `462`,
    954: `463`,
    955: `463`,
    956: `464`,
    957: `464`,
    958: `465`,
    959: `465`,
    96: `21`,
    960: `465`,
    961: `466`,
    962: `467`,
    963: `467`,
    964: `468`,
    965: `468`,
    966: `469`,
    967: `469`,
    968: `469`,
    969: `470`,
    97: `21`,
    970: `470`,
    971: `471`,
    972: `471`,
    973: `472`,
    974: `472`,
    975: `473`,
    976: `474`,
    977: `474`,
    978: `475`,
    979: `475`,
    98: `21`,
    980: `476`,
    981: `476`,
    982: `477`,
    983: `478`,
    984: `478`,
    985: `479`,
    986: `479`,
    987: `480`,
    988: `480`,
    989: `481`,
    99: `21`,
    990: `482`,
    991: `482`,
    992: `483`,
    993: `483`,
    994: `484`,
    995: `484`,
    996: `485`,
    997: `486`,
    998: `486`,
    999: `488`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"internalType":"struct T16","name":"v10574","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_181","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_181","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_181","type":"tuple"},{"internalType":"bool","name":"_User_optin0_181","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3700","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4134","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4574","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5003","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5433","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5886","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6387","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6885","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v10525","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10531","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10538","type":"address"},{"internalType":"uint256","name":"v10539","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10549","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10557","type":"address"},{"internalType":"address payable","name":"v10558","type":"address"},{"internalType":"uint256","name":"v10559","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10489","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10496","type":"address"},{"internalType":"address payable","name":"v10497","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10501","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10513","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10518","type":"address"},{"internalType":"address payable","name":"v10519","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10566","type":"uint256"},{"internalType":"address payable","name":"v10567","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_181","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_181","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_181","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_181","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_181","type":"tuple"},{"internalType":"bool","name":"_User_optin0_181","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v10577","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200550f38819003918201601f19168301916001600160401b03831184841017620005a15780849260409485528339810103126200070c576020604051916200004c8362000711565b80518352015161ffff19811681036200070c576020820152600080554360035560405161026081016001600160401b03811182821017620005a157600091610240916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201528261022082015201526040519081606081011060018060401b03606084011117620005a15760608201604052620001376060830162000711565b6000606083015260006080830152606082018252620001556200072d565b6020830152620001646200075d565b604083015260ff60045416620006f3577fee7ce511d5b8643c8bc5c542ca8ef8446aa8d6f7cc0d2c6f5d34f08a9dc501da60606040513381528351602082015261ffff196020850151166040820152a180518015908115620006e6575b5015620006cd5734620006b45760058251526064602083510152815160208301515260016020808401510152600060408301515260016020604084015101526020820151604080840151015260006060604084015101526000608060408401510152600060a060408401510152600060c060408401510152604051918260a081011060018060401b0360a085011117620005a15760409060a0840182526000845260006020850152620002736200075d565b8285015260608401926000845260006080860152338552602061ffff199101511660208501520151604083015243905260405180602081011060018060401b03602083011117620005a1576020818101604090815260008352830151015115620005b757506040516001600160401b03610140820190811190821117620005a15780610140610120920160405260008152600060208201526000604082015260006060820152600060808201526200032a6200072d565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038551169485845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405192602084015261ffff19602082015116604084015260408101516060840152606081015160808401526080810151151560a0840152602060a0820151818151805160c0880152015160e08601520151151561010084015260c08101518284015260e0810151610140840152610100810151610160840152015161018082015261018081526101a0810181811060018060401b03821117620005a15760405280516001600160401b038111620005a15762000491600254620007af565b601f811162000553575b50602091601f8211600114620004e957918192600092620004dd575b50508160011b916000199060031b1c1916176002555b604051614ce99081620008068239f35b015190503880620004b7565b601f19821692600260005260206000209160005b8581106200053a5750836001951062000520575b505050811b01600255620004cd565b015160001960f88460031b161c1916905538808062000511565b91926020600181928685015181550194019201620004fd565b60026000526200058f90600080516020620054ef833981519152601f840160051c8101916020851062000596575b601f0160051c0190620007ec565b386200049b565b909150819062000581565b634e487b7160e01b600052604160045260246000fd5b60018060a01b03600080808084875116608088015190828215620006aa575bf115620006945760008093928193928293478093525116828215620006a0575bf115620006945760008055600060015562000613600254620007af565b8062000621575b50620004cd565b601f81116001146200063b575060006002555b386200061a565b60026000526200068390601f0160051c600080516020620054ef833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620007ec565b600060208120816002555562000634565b6040513d6000823e3d90fd5b506108fc620005f6565b506108fc620005d6565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b90506001541438620001c1565b60405163100960cb60e01b815260116004820152602490fd5b600080fd5b604081019081106001600160401b03821117620005a157604052565b604051906200073c8262000711565b60006020836040516200074f8162000711565b838152838382015281520152565b6040519060e082016001600160401b03811183821017620005a1576040528160c0600091828152826020820152620007946200072d565b60408201528260608201528260808201528260a08201520152565b90600182811c92168015620007e1575b6020831014620007cb57565b634e487b7160e01b600052602260045260246000fd5b91607f1691620007bf565b818110620007f8575050565b60008155600101620007ec56fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c80630a84e99f14610e3b5780631548a30d14610d1a5780631e93b0f114610cfb57806336e56ea514610c9a5780633702d0ce14610c5e5780634ab9f8b314610c08578063523df4f614610ba5578063544774a914610b4b57806355c42a9514610b0b578063582523cd14610a64578063672422c714610a1657806374623535146109da57806374ecfa44146107f757806374f16ec9146107635780637a2b54dc146107205780637f0595e2146106b9578063832307571461069a578063883513de1461064e57806392cf8bd514610601578063a57924241461057a578063a855bc10146104c6578063ab53f2c61461045a578063b87939c7146103a8578063bf7df9c314610356578063cd6637a814610309578063f1b1259d146101be5763f33c0dce146101525750610010565b346101ba57816003193601126101ba57600361016c61136f565b9254036101a35760206101a08484610100610196610188611017565b868082518301019101611587565b0151928391015251908152f35b602490600d84519163100960cb60e01b8352820152fd5b5080fd5b5091346101ba57806003193601126101ba576101d8610e9d565b916101e1610eb8565b906101ea61136f565b918351946101f786610f55565b6001600160a01b039081168652908116602086810191825295610218614c58565b9760038554036102f2575092828692889994610200999661024861023a611017565b898082518301019101611587565b50511685515251168484510152838301928184515281858551015260018151926102988551948561027c8a820192836116cd565b0395610290601f1997888101835282610ff4565b51902061119a565b51906102a382610ece565b6102ac82610ece565b50036102e9576102da9293505190610290845191826102ce88820195866116cd565b03908101835282610ff4565b01510151928391015251908152f35b50505051610196565b602490601088519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba57600361032461136f565b92540361033f576020610180848460c0610196610188611017565b602490600c84519163100960cb60e01b8352820152fd5b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a1575061039261039d9261038c6110c2565b5061131e565b905191829182610eee565b0390f35b80fd5b8280fd5b5090346103a15760203660031901126103a1576103c3610e9d565b6103cb61136f565b9260038354036104435760206101e086868187876103f86103ea611017565b888082518301019101611587565b506001600160a01b031690600161040e836110e1565b5161041881610ece565b61042181610ece565b036104385750610196906110e1565b015251908152f35b915050928391610430565b602490600f86519163100960cb60e01b8352820152fd5b8284346101ba57816003193601126101ba578154610476611017565b91805193849283526020828185015284518093850152815b8381106104af57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161048e565b509190816003193601126103a1576102209061056f6104e3610eb8565b946104ec61136f565b9283918651906104fb82610f55565b3581526001600160a01b03978816602082810191825288519099909161052083610f55565b895161052b81610f55565b858152858c82015283528a83019361054161140b565b8552518351525116898251015260068251525160e0825101526105626114e3565b91825251878201526116f0565b015115159051908152f35b50346101ba5760203660031901126101ba57610594610e9d565b90600361059f61136f565b9354036105ea576020610140858560016105cb876105be6103ea611017565b50828060a01b031661131e565b516105d581610ece565b6105de81610ece565b14928391015251908152f35b602490600a85519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba57600361061c61136f565b925403610637576020610160848460e0610196610188611017565b602490600b84519163100960cb60e01b8352820152fd5b50346101ba57816003193601126101ba57600361066961136f565b925403610683576020610100848481610196610188611017565b602490600884519163100960cb60e01b8352820152fd5b8284346101ba57816003193601126101ba576020906001549051908152f35b50346101ba5760203660031901126101ba576106d3610e9d565b9060036106de61136f565b93540361070957602060e0858560016105cb876106fc6103ea611017565b50828060a01b0316611252565b602490600785519163100960cb60e01b8352820152fd5b8284816003193601126101ba5761024060209261056f61073e61136f565b80926107486114e3565b878101906007825152511515610100825101526105626114e3565b8284806003193601126101ba57606061077a610e9d565b9261056f61078661136f565b8092855161079381610f55565b60209788820160018060a01b03809216835260243581528851916107b683610f55565b89516107c181610f55565b858152858c82015283528a8301936107d761140b565b8552511682515251898251015260028251525186825101526105626114e3565b50916101c03660031901126101ba5761080e61136f565b815161081981610f55565b843581526101a03660231901126109d6578251946101208601906001600160401b038211878310176109c35750835260243560088110156109bf578552602094856043193601126109bf57835161086f81610f86565b6001600160a01b039060443582811681036109bb57815287830152866063193601126109b35784516108a081610f86565b606435815285830152846083193601126109b35784516108bf81610f55565b60843582811681036109bb57815260a43588820152606083015260c43580151581036109b75760808301528660e3193601126109b357845161090081610f86565b60e43582811681036109bb57815260a08301526060366101031901126109b357845161092b81610fa1565b6101043582811681036109bb5781526101243582811681036109bb5788820152610144358682015260c083015284610163193601126109b35784519061097082610f55565b6101643582526101843590811681036109b7578782015260e08201526101a43580151581036109b357610100820152858201526109ad91906116f0565b51908152f35b8580fd5b8680fd5b8780fd5b8480fd5b634e487b7160e01b865260419052602485fd5b8380fd5b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a1575061039261039d92610a106110c2565b50611252565b50346101ba57816003193601126101ba576003610a3161136f565b925403610a4d5760206101c08484610120610196610188611017565b602490600e84519163100960cb60e01b8352820152fd5b828460603660031901126101ba5760c060209261056f610a82610e9d565b91610a8b610eb8565b90610a9461136f565b938492610a9f6110c2565b6001600160a01b039283168152908216898201908152604435898301908152895192939091610acd84610f55565b610ad56110c2565b8452818c850195610ae461140b565b8752511684515251168a8351015251888251015260058251525186825101526105626114e3565b8284816003193601126101ba57608060209261056f610b2861136f565b8092610b326114e3565b87810190600382515251151586825101526105626114e3565b509190346103a15760203660031901126103a157506020610b77608093610b70611164565b503561119a565b91808051938051610b8781610ece565b85528381015115158486015201519081519084015201516060820152f35b60208484366003190183136103a157829061056f610bc1610e9d565b610bc961136f565b928391610bd46114b4565b80516001600160a01b03909216909152858101805183905290518151870152610bfb6114e3565b91825251858201526116f0565b50829060203660031901126103a45760a09061056f602094610c28610e9d565b90610c3161136f565b938492610c3c6114b4565b908151906001808a1b03169052888101918251525186825101526105626114e3565b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a1575061039261039d92610c946110c2565b506112cd565b508290346103a45760203660031901126103a45735916001600160a01b03831683036103a15750610cd5606092610ccf6110c2565b506110e1565b90808051928051610ce581610ece565b8452602081015115156020850152015190820152f35b8284346101ba57816003193601126101ba576020906003549051908152f35b5082346103a457806003193601126103a457610d34610e9d565b91610d3d610eb8565b90610d4661136f565b91835194610d5386610f55565b6001600160a01b039081168652908116602086810191825295610d74614c58565b936003895403610e24575091610120969791818794610da2610d94611017565b8c8082518301019101611587565b5051168551525116878451015286830192818451528188855101526001815192610dd68551948561027c8d820192836116cd565b5190610de182610ece565b610dea82610ece565b5003610e1b57610e0c9293505190610290845191826102ce8b820195866116cd565b01515b51928391015251908152f35b50505051610e0f565b602490600988519163100960cb60e01b8352820152fd5b50829060203660031901126103a45760209261056f8392610e5a61136f565b9283918551610e6881610f55565b8651610e7381610f86565b838152815288810191610e8461140b565b83523581515260018251525186825101526105626114e3565b600435906001600160a01b0382168203610eb357565b600080fd5b602435906001600160a01b0382168203610eb357565b60021115610ed857565b634e487b7160e01b600052602160045260246000fd5b91909160408060608301948051610f0481610ece565b845260208101511515602085015201511515910152565b90600182811c92168015610f4b575b6020831014610f3557565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f2a565b604081019081106001600160401b03821117610f7057604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117610f7057604052565b606081019081106001600160401b03821117610f7057604052565b61014081019081106001600160401b03821117610f7057604052565b6101a081019081106001600160401b03821117610f7057604052565b601f909101601f19168101906001600160401b03821190821017610f7057604052565b604051906000826002549161102b83610f1b565b8083526001938085169081156110a15750600114611053575b5061105192500383610ff4565b565b60026000908152600080516020614c9d83398151915294602093509091905b818310611089575050611051935082010138611044565b85548884018501529485019487945091830191611072565b905061105194506020925060ff191682840152151560051b82010138611044565b604051906110cf82610fa1565b60006040838281528260208201520152565b906110ea6110c2565b9160018060a01b03166000908082526005602052600160ff60408420541661111181610ece565b03611159576040929350815260056020522060016040519161113283610fa1565b60ff815481811661114281610ece565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061117182610fa1565b816000815260006020820152604080519161118b83610f55565b60008352600060208401520152565b6111a2611164565b906000908082526006602052604092600160ff85852054166111c381610ece565b03611243575081526006602052818120918051926111e084610fa1565b60ff81548181166111f081610ece565b865260081c1615156020850152815192838301906001600160401b0382118583101761122f575082526001810154835260020154602083015282015290565b634e487b7160e01b81526041600452602490fd5b80949350829150526020830152565b9061125b6110c2565b9160018060a01b03166000908082526007602052600160ff60408420541661128281610ece565b03611159576040929350815260076020522060ff604051916112a383610fa1565b548181166112b081610ece565b8352818160081c161515602084015260101c161515604082015290565b906112d66110c2565b9160018060a01b03166000908082526008602052600160ff6040842054166112fd81610ece565b03611159576040929350815260086020522060ff604051916112a383610fa1565b906113276110c2565b9160018060a01b03166000908082526009602052600160ff60408420541661134e81610ece565b03611159576040929350815260096020522060ff604051916112a383610fa1565b6040519061026082016001600160401b03811183821017610f7057604052816102406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e082015282610200820152826102208201520152565b60408051919061012083016001600160401b03811184821017610f7057815261010083600092838252805161143f81610f86565b8481526020830152805161145281610f86565b84815281830152805161146481610f55565b8481528460208201526060830152836080830152805161148381610f86565b84815260a08301526114936110c2565b60c0830152516114a281610f55565b83815283602082015260e08201520152565b604051906114c182610f55565b816040516114ce81610f86565b60008152815260206114de61140b565b910152565b604051906114f082610f55565b816000815260206114de61140b565b6040519061150c82610f55565b600060208360405161151d81610f55565b838152838382015281520152565b6040519060e082016001600160401b03811183821017610f70576040528160c060009182815282602082015261155f6114ff565b60408201528260608201528260808201528260a08201520152565b51908115158203610eb357565b8091036101808112610eb3576040805192610140928385016001600160401b03811186821017610f7057835281516001600160a01b0381168103610eb3578552602082015161ffff1981168103610eb35760208601528282015183860152606082015160608601526115fb6080830161157a565b6080860152609f190160608112610eb3578280519161161983610f55565b12610eb357610160925161162c81610f55565b60a0830151815260c08301516020820152815261164b60e0830161157a565b602082015260a08501526101008082015160c0860152610120938483015160e08701528201519085015201519082015290565b516008811015610ed85790565b6040519060a082016001600160401b03811183821017610f705760405260006080838281528260208201526116be61152b565b60408201528260608201520152565b81516001600160a01b039081168252602092830151169181019190915260400190565b60405192919061040084016001600160401b03811185821017610f70578060405261171a81610f86565b60008152845261172861152b565b602085015260405161173981610f86565b60008152604085015261174a61152b565b606085015260405161175b81610f55565b6000815260006020820152608085015261177361152b565b60a085015261178061152b565b60c085015260405161179181610f86565b6000815260e08501526117a261152b565b6101008501526117b06110c2565b610120850152600061014085015260006101608501526040516117d281610f55565b60008152600060208201526101808501526040516117ef81610f55565b60008152600060208201526101a085015260405161180c81610f55565b60008152600060208201526101c085015260405161182981610f55565b60008152600060208201526101e0850152600061020085015261184a61152b565b61022085015260405161185c81610f55565b6000815260006020820152610240850152600061026085015260405161188181610f55565b600081526000602082015261028085015260405161189e81610f55565b60008152600060208201526102a08501526040516118bb81610f55565b60008152600060208201526102c08501526040516118d881610f55565b60008152600060208201526102e08501526118f16110c2565b610300850152600061032085015261190761152b565b61034085015261191561152b565b610360850152600061038085015261192b61152b565b6103a085015261193961152b565b6103c085015261194761152b565b6103e0850152600360005403614bdc57611971611962611017565b60208082518301019101611587565b9060ff60045416614bc3576040513381528151602082015260208201518051916008831015610ed8576101006101e0927f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac294604084015260018060a01b0360208201515116606084015260408101515160808401526020606082015160018060a01b0381511660a0860152015160c08401526080810151151560e084015260018060a01b0360a0820151511682840152604060c082015160018060a01b0381511661012086015260018060a01b03602082015116610140860152015161016084015260e08101518051610180850152602060018060a01b03910151166101a0840152015115156101c0820152a180518015908115614bb7575b5015614b9e57611a9d602082015161167e565b6008811015610ed857611f9f57602090810151015184528051336001600160a01b0390911603611f7b5760015b15611f625734611f49576000602060409360018060a01b0387515116835260078252848320600160ff1982541617905560018060a01b0387515116835284832062ff00001981541690557f8496c85a30d43a1f25741e28dfdd2a7a370e5082eae82e3280534f5e278926da828651858152a10152606081015160208501515260808101511515602080860151015260a0810151826020860151015260c081015160606020860151015260e081015160806020860151015261010081015160a06020860151015261012081015160c0602086015101526020611ba961168b565b82516001600160a01b031681528183015161ffff1916828201529401518285015243606085015201516080830152604051611be381610f86565b6000815260408301516020015115611e715750610120604051611c0581610fbc565b6000815260006020820152600060408201526000606082015260006080820152611c2d6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252611d6582610fd8565b81516001600160401b038111610f7057611d80600254610f1b565b601f8111611e29575b50602092601f8211600114611dc65792819293600092611dbb575b50508160011b916000199060031b1c191617600255565b015190503880611da4565b601f19821693600260005260206000209160005b868110611e115750836001959610611df8575b505050811b01600255565b015160001960f88460031b161c19169055388080611ded565b91926020600181928685015181550194019201611dda565b6002600052611e6190600080516020614c9d833981519152601f840160051c81019160208510611e67575b601f0160051c0190614c41565b38611d89565b9091508190611e54565b9091600080808060018060a01b03855116608086015190828215611f40575bf115611f2b574791829052516000918291829182916001600160a01b0316828215611f37575bf115611f2b57600080556000600155611ed0600254610f1b565b80611ed85750565b601f8111600114611eeb57506000600255565b6002600052611f1e90601f0160051c600080516020614c9d83398151915201600080516020614cbd833981519152614c41565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc611eb6565b506108fc611e90565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6001611f8633611252565b51611f9081610ece565b611f9981610ece565b14611aca565b611fb060208296949396015161167e565b6008811015610ed8576001036123985760200151604090810151908301528351336001600160a01b03909116036123745760015b1561235b5760408201515134036123425760406000917f3c30e514207a0ad1b8df4911e08dcc81fc2a57a9e0a74f9601a6743cf27ce2f260208351858152a10152612039606084015160408301515190614c20565b6060820151526080830151151560206060830151015260a083015160406060830151015260c0830151606080830151015260e083015160806060830151015261010083015160a06060830151015261012083015160c0606083015101526040806120a161168b565b85516001600160a01b0316815260208087015161ffff191690820152606084810151838301524390820152940151910151510160808301526040516120e581610f86565b6000815260408301516020015115611e71575061012060405161210781610fbc565b600081526000602082015260006040820152600060608201526000608082015261212f6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261226782610fd8565b81516001600160401b038111610f7057612282600254610f1b565b601f8111612305575b50602092601f82116001146122bc5792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106122ed5750836001959610611df857505050811b01600255565b919260206001819286850151815501940192016122d0565b600260005261233c90600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b3861228b565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b600161237f33611252565b5161238981610ece565b61239281610ece565b14611fe4565b6123a960208296939496015161167e565b6008811015610ed8576002036127dd57602001516060015160808501528051336001600160a01b03909116036127b95760015b156127a057602060808501510151604082015110612787573461276e576000606060409360018060a01b036080880151511683526005602052848320600160ff19825416179055608087015160208101519060018060a01b039051168452600186852001557f32106fe5c7738a3714b6bf3c787157bcac2f37ecbca6cdf1a818b96b03905b2b60208651858152a10152606081015160a08501515260808101511515602060a0860151015260a08101518260a0860151015260c0810151606060a0860151015260e0810151608060a0860151015261010081015160a080860151015261012081015160c060a0860151015260a06124d761168b565b94600180831b03835116865261ffff1960208401511660208701520151828501524360608501520151608083015260405161251181610f86565b6000815260408301516020015115611e71575061012060405161253381610fbc565b600081526000602082015260006040820152600060608201526000608082015261255b6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261269382610fd8565b81516001600160401b038111610f70576126ae600254610f1b565b601f8111612731575b50602092601f82116001146126e85792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106127195750836001959610611df857505050811b01600255565b919260206001819286850151815501940192016126fc565b600260005261276890600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b386126b7565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60016127c433611252565b516127ce81610ece565b6127d781610ece565b146123dc565b6127ea602082015161167e565b6008811015610ed857600303612b7657508051336001600160a01b0390911603612b5d5734612b4457600060806040937f4a2a1fba1944c90e95b4df98ecd5fe097626e3ac973500e1489bd3389b69b05b60208651858152a10152606081015160c0850151526000602060c0860151015260a08101518260c0860151015260c0810151606060c0860151015260e0810151608060c0860151015261010081015160a060c0860151015261012081015160c080860151015260c06128ab61168b565b82516001600160a01b0316815260208084015161ffff19169082015294015182850152436060850152015160808301526040516128e781610f86565b6000815260408301516020015115611e71575061012060405161290981610fbc565b60008152600060208201526000604082015260006060820152600060808201526129316114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612a6982610fd8565b81516001600160401b038111610f7057612a84600254610f1b565b601f8111612b07575b50602092601f8211600114612abe5792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612aef5750836001959610611df857505050811b01600255565b91926020600181928685015181550194019201612ad2565b6002600052612b3e90600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b38612a8d565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b612b83602082015161167e565b6008811015610ed857600403612f40576020015160a0015160e085015280516001600160a01b03163303612f275734612f0e57600060a0604093600180831b0360e088015151168352600760205282858120557f7e09a3ea0fc51a543c41a9fbd839e44ceb707eac27ac2b61ce4bb70f40ecf51060208651858152a10152606081015161010085015152608081015115156020610100860151015260a081015182610100860151015260c08101516060610100860151015260e08101516080610100860151015261010081015160a0610100860151015261012081015160c06101008601510152610100612c7561168b565b82516001600160a01b0316815260208084015161ffff1916908201529401518285015243606085015201516080830152604051612cb181610f86565b6000815260408301516020015115611e715750610120604051612cd381610fbc565b6000815260006020820152600060408201526000606082015260006080820152612cfb6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252612e3382610fd8565b81516001600160401b038111610f7057612e4e600254610f1b565b601f8111612ed1575b50602092601f8211600114612e885792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612eb95750836001959610611df857505050811b01600255565b91926020600181928685015181550194019201612e9c565b6002600052612f0890600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b38612e57565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b612f5160208296949396015161167e565b6008811015610ed8576005036135a6576020015160c001516101208301819052604081015160608601511061014084015251600190612f98906001600160a01b031661131e565b51612fa281610ece565b612fab81610ece565b0361358d576101408201511561358657604061012083015101515b80610160840152340361356d5760c0600191828060a01b03610120850151511661018085015152828060a01b0360206101208601510151166020610180860151015260006101a085015152600060206101a086015101528261305661303c61304a610180880151604051928391602083016116cd565b03601f198101835282610ff4565b6020815191012061119a565b5161306081610ece565b61306981610ece565b0361356257604061308d61018086015182516102908161303c6020820194856116cd565b01515b6101c0850181815290516101e0860151525160200151610120850151604001516130b991614c20565b60206101e086015101526101808401516040516130de8161303c6020820194856116cd565b5190206000526006602052604060002060ff199084828254161790556101e085015161018086015160405161311b8161303c6020820194856116cd565b5190206000526006602052600260206040600020928051888501550151910155838060a01b03610120860151511660005260056020528360406000209182541617905582613175818060a01b0361012087015151166110e1565b5161317f81610ece565b61318881610ece565b03613558576131bb60406131a8858060a01b0361012088015151166110e1565b01515b6040610120870151015190614c20565b838060a01b036101208601515116600052600560205283604060002001557f868b987a7482f6d0d69ed1a28eb6e75690d23d9f38348afca79a86564683d61c6020604051858152a10152610140810151156135485761322860608401516040610120840151015190614c20565b6102008201525b61020081015161022082015152608083015115156020610220830151015260a08301516040610220830151015260c08301516060610220830151015260e08301516080610220830151015261010083015160a0610220830151015261012083015160c0610220830151015261016060406132a761168b565b85516001600160a01b0316815260208087015161ffff191690820152610220840151828201524360608201529401519101510160808301526040516132eb81610f86565b6000815260408301516020015115611e71575061012060405161330d81610fbc565b60008152600060208201526000604082015260006060820152600060808201526133356114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261346d82610fd8565b81516001600160401b038111610f7057613488600254610f1b565b601f811161350b575b50602092601f82116001146134c25792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106134f35750836001959610611df857505050811b01600255565b919260206001819286850151815501940192016134d6565b600260005261354290600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b38613491565b606083015161020082015261322f565b6131bb60006131ab565b6101a0840151613090565b60405163100960cb60e01b815260236004820152602490fd5b6000612fc6565b60405163100960cb60e01b815260226004820152602490fd5b6135b3602082015161167e565b6008811015610ed8576006036146f1576020015160e0015161024083015260016135dc336110e1565b516135e681610ece565b6135ef81610ece565b036146ea5760406135ff336110e1565b01515b610260830152610240820151516040850151106146d35761026082015161024083015151116146ba57346146a1576102206001913361028085015152828060a01b0360206102408601510151166020610280860151015260006102a085015152600060206102a086015101528261368d61303c61304a610280880151604051928391602083016116cd565b5161369781610ece565b6136a081610ece565b03614693576136df60406136c761028087015182516102908161303c6020820194856116cd565b01515b806102c0870152516102408601515190614c20565b6102e08501515261370060206102c086015101516102408601515190614c34565b60206102e086015101526102808401516040516137258161303c6020820194856116cd565b519020600052600660205260406000208360ff198254161790556102e08401516102808501516040516137608161303c6020820194856116cd565b51902060005260066020526002602060406000209280518785015501519101557f0fd1cafd43abeb11ff663109f8605c590437441ce43b30aa6fcd90ffc51555da6020604051858152a101523361030082015152610240810151516020610300830151015261ffff19602084015116604061030083015101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2360606103008301516040519060018060a01b03815116825260208101516020830152604061ffff19910151166040820152a16001613837336112cd565b5161384181610ece565b61384a81610ece565b03613f6b5760008080806040870151610240860151908151900361038087015251818115613f62575b3390f115611f2b578061026061038092015115600014613be257336000526005602052600060016040822082815501556138b860608501516102408301515190614c34565b6103a0820151526080840151151560206103a0830151015260a084015160406103a083015101526138f460c08501516102408301515190614c20565b60606103a0830151015260e084015160806103a0830151015261391b610100850151614bf5565b60a06103a08301510152613933610120850151614bf5565b60c06103a0830151015261394561168b565b9360018060a01b038151168552602061ffff199101511660208501526103a081015160408501524360608501520151608083015260405161398581610f86565b6000815260408301516020015115611e7157506101206040516139a781610fbc565b60008152600060208201526000604082015260006060820152600060808201526139cf6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613b0782610fd8565b81516001600160401b038111610f7057613b22600254610f1b565b601f8111613ba5575b50602092601f8211600114613b5c5792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613b8d5750836001959610611df857505050811b01600255565b91926020600181928685015181550194019201613b70565b6002600052613bdc90600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b38613b2b565b3360005260056020526040600020600160ff19825416179055613c116102608201516102408301515190614c34565b336000526005602052600160406000200155613c3860608501516102408301515190614c34565b6103c0820151526080840151151560206103c0830151015260a084015160406103c08301510152613c7460c08501516102408301515190614c20565b60606103c0830151015260e084015160806103c08301510152613c9b610100850151614bf5565b60a06103c08301510152613cb3610120850151614bf5565b60c06103c08301510152613cc561168b565b9360018060a01b038151168552602061ffff199101511660208501526103c0810151604085015243606085015201516080830152604051613d0581610f86565b6000815260408301516020015115611e715750610120604051613d2781610fbc565b6000815260006020820152600060408201526000606082015260006080820152613d4f6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e081015161014085015261010081015161016085015201516101808301526101808252613e8782610fd8565b81516001600160401b038111610f7057613ea2600254610f1b565b601f8111613f25575b50602092601f8211600114613edc5792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613f0d5750836001959610611df857505050811b01600255565b91926020600181928685015181550194019201613ef0565b6002600052613f5c90600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b38613eab565b506108fc613873565b33600090815260086020526040808220805462ff00ff1916600117905584015161024083015180519091036103208401525181908190819081811561468a575b3390f115611f2b5780610260610320920151156000146143125733600052600560205260006001604082208281550155613ff060608501516102408301515190614c34565b61034082015152608084015115156020610340830151015260a08401516040610340830151015261402c60c08501516102408301515190614c20565b6060610340830151015260e084015160806103408301510152614053610100850151614bf5565b60a0610340830151015261012084015160c0610340830151015261407561168b565b9360018060a01b038151168552602061ffff199101511660208501526103408101516040850152436060850152015160808301526040516140b581610f86565b6000815260408301516020015115611e7157506101206040516140d781610fbc565b60008152600060208201526000604082015260006060820152600060808201526140ff6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e08101516101408501526101008101516101608501520151610180830152610180825261423782610fd8565b81516001600160401b038111610f7057614252600254610f1b565b601f81116142d5575b50602092601f821160011461428c5792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106142bd5750836001959610611df857505050811b01600255565b919260206001819286850151815501940192016142a0565b600260005261430c90600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b3861425b565b3360005260056020526040600020600160ff198254161790556143416102608201516102408301515190614c34565b33600052600560205260016040600020015561436860608501516102408301515190614c34565b61036082015152608084015115156020610360830151015260a0840151604061036083015101526143a460c08501516102408301515190614c20565b6060610360830151015260e0840151608061036083015101526143cb610100850151614bf5565b60a0610360830151015261012084015160c061036083015101526143ed61168b565b9360018060a01b038151168552602061ffff1991015116602085015261036081015160408501524360608501520151608083015260405161442d81610f86565b6000815260408301516020015115611e71575061012060405161444f81610fbc565b60008152600060208201526000604082015260006060820152600060808201526144776114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526145af82610fd8565b81516001600160401b038111610f70576145ca600254610f1b565b601f811161464d575b50602092601f82116001146146045792819293600092611dbb5750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106146355750836001959610611df857505050811b01600255565b91926020600181928685015181550194019201614618565b600260005261468490600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b386145d3565b506108fc613fab565b6136df6102a08501516136ca565b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b6000613602565b60206147029195929395015161167e565b6008811015610ed857600714614719575b50509050565b34614b8557336000908152600960209081526040808320805462ff00ff19166001179055805183815290946102409290917f4db5fbb99d626ad41a6e9558d98f3c416602ed7de9db2f09e65637cdc103e95c9190a1015260608101516103e0850151526080810151151560206103e0860151015260a0810151826103e0860151015260c081015160606103e0860151015260e081015160806103e0860151015261010081015160a06103e0860151015261012081015160c06103e086015101526103e06147e461168b565b82516001600160a01b0316815260208084015161ffff191690820152940151828501524360608501520151608083015260405161482081610f86565b6000815260408301516020015115614aad575061012060405161484281610fbc565b600081526000602082015260006040820152600060608201526000608082015261486a6114ff565b60a0820152600060c0820152600060e0820152600061010082015260008282015260c0604060018060a01b038651169586845261ffff196020820151166020850152608081015182850152818101515160608501526020828201510151151560808501528180820151015160a0850152606082820151015183850152608082820151015160e085015260a0828201510151610100850152015101518282015260036000554360015560405193602085015261ffff19602082015116604085015260408101516060850152606081015160808501526080810151151560a0850152602060a0820151818151805160c0890152015160e08701520151151561010085015260c08101518285015260e0810151610140850152610100810151610160850152015161018083015261018082526149a282610fd8565b81516001600160401b038111610f70576149bd600254610f1b565b601f8111614a70575b50602092601f8211600114614a0a57928192936000926149ff575b50508160011b916000199060031b1c1916176002555b803880614713565b0151905038806149e1565b601f19821693600260005260206000209160005b868110614a585750836001959610614a3f575b505050811b016002556149f7565b015160001960f88460031b161c19169055388080614a31565b91926020600181928685015181550194019201614a1e565b6002600052614aa790600080516020614c9d833981519152601f840160051c81019160208510611e6757601f0160051c0190614c41565b386149c6565b9091600080808060018060a01b03855116608086015190828215614b7c575bf115611f2b574791829052516000918291829182916001600160a01b0316828215614b73575bf115611f2b57600080556000600155614b0c600254610f1b565b80614b18575b506149f7565b601f8111600114614b30575060006002555b38614b12565b6002600052614b6390601f0160051c600080516020614c9d83398151915201600080516020614cbd833981519152614c41565b6000602081208160025555614b2a565b506108fc614af2565b506108fc614acc565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541438611a8a565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b906001820191828111614c0a578210610eb357565b634e487b7160e01b600052601160045260246000fd5b9190820191828111614c0a578210610eb357565b908103908111614c0a5790565b818110614c4c575050565b60008155600101614c41565b60405190614c6582610f55565b81604051614c7281610f55565b60008152600060208201528152602060405191614c8e83610f55565b60008352600082840152015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acfa164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 21775,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:340:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:79:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin_addAdmin": Admin_addAdmin,
  "Admin_deposit": Admin_deposit,
  "Admin_editUserReward": Admin_editUserReward,
  "Admin_endContractAndTransfer": Admin_endContractAndTransfer,
  "Admin_revokeAdmin": Admin_revokeAdmin,
  "Admin_setReward": Admin_setReward,
  "Deployer": Deployer,
  "User_claim": User_claim,
  "User_optin": User_optin
  };
export const _APIs = {
  Admin: {
    addAdmin: Admin_addAdmin,
    deposit: Admin_deposit,
    editUserReward: Admin_editUserReward,
    endContractAndTransfer: Admin_endContractAndTransfer,
    revokeAdmin: Admin_revokeAdmin,
    setReward: Admin_setReward
    },
  User: {
    claim: User_claim,
    optin: User_optin
    }
  };
