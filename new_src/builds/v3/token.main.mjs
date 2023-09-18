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
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    i: ctc3,
    scale: ctc3
    });
  const ctc6 = stdlib.T_Object({
    i: ctc5,
    sign: ctc4
    });
  const ctc7 = stdlib.T_Object({
    bal: ctc3,
    keepGoing: ctc4,
    percent: ctc6,
    total_amount_claimed: ctc3,
    total_rewards_allcoated: ctc3,
    total_users_claim: ctc3,
    usersNo: ctc3
    });
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc12 = stdlib.T_Object({
    claimed: ctc3,
    rewards: ctc3
    });
  const ctc13 = stdlib.T_Data({
    None: ctc10,
    Some: ctc3
    });
  const ctc14 = stdlib.T_Data({
    None: ctc10,
    Some: ctc12
    });
  const ctc15 = stdlib.T_Data({
    None: ctc10,
    Some: ctc10
    });
  const map0_ctc = ctc13;
  
  const map1_ctc = ctc14;
  
  const map2_ctc = ctc15;
  
  const map3_ctc = ctc15;
  
  const map4_ctc = ctc15;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async (_v2058 ) => {
          const v2058 = stdlib.protect(ctc0, _v2058, null);
        
        const v2059 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v2058, ctc10), null);
        const v2060 = {
          None: 0,
          Some: 1
          }[v2059[0]];
        const v2061 = stdlib.eq(v2060, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2061;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async () => {
        
        
        return v2086;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async (_v2073, _v2074 ) => {
          const v2073 = stdlib.protect(ctc0, _v2073, null);
          const v2074 = stdlib.protect(ctc2, _v2074, null);
        
        const v2075 = [v2073, v2074];
        const v2076 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2075, ctc12), null);
        const v2077 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2078 = stdlib.fromSome(v2076, v2077);
        const v2079 = v2078.claimed;
        
        return v2079;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async (_v2062 ) => {
          const v2062 = stdlib.protect(ctc0, _v2062, null);
        
        const v2063 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v2062, ctc10), null);
        const v2064 = {
          None: 0,
          Some: 1
          }[v2063[0]];
        const v2065 = stdlib.eq(v2064, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2065;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async () => {
        
        
        return v2084;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async () => {
        
        
        return v2081;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async () => {
        
        
        return v2080;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async () => {
        
        
        return v2082;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async (_v2055 ) => {
          const v2055 = stdlib.protect(ctc0, _v2055, null);
        
        const v2056 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2055, ctc3), null);
        const v2057 = stdlib.fromSome(v2056, stdlib.checkedBigNumberify('./token.rsh:94:58:decimal', stdlib.UInt_max, '0'));
        
        return v2057;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = svs;
      return (await ((async (_v2066, _v2067 ) => {
          const v2066 = stdlib.protect(ctc0, _v2066, null);
          const v2067 = stdlib.protect(ctc2, _v2067, null);
        
        const v2068 = [v2066, v2067];
        const v2069 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2068, ctc12), null);
        const v2070 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2071 = stdlib.fromSome(v2069, v2070);
        const v2072 = v2071.rewards;
        
        return v2072;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        Admins: {
          decode: Info_Admins,
          dom: [ctc0],
          rng: ctc4
          },
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc3
          },
        claimed: {
          decode: Info_claimed,
          dom: [ctc0, ctc2],
          rng: ctc3
          },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc4
          },
        totalAllocatedFunds: {
          decode: Info_totalAllocatedFunds,
          dom: [],
          rng: ctc3
          },
        totalAmountClaimed: {
          decode: Info_totalAmountClaimed,
          dom: [],
          rng: ctc3
          },
        totalClaimed: {
          decode: Info_totalClaimed,
          dom: [],
          rng: ctc3
          },
        totalOptedIn: {
          decode: Info_totalOptedIn,
          dom: [],
          rng: ctc3
          },
        totalRewards: {
          decode: Info_totalRewards,
          dom: [ctc0],
          rng: ctc3
          },
        userReward: {
          decode: Info_userReward,
          dom: [ctc0, ctc2],
          rng: ctc3
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc7, ctc9, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3]
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc15,
    Admin_deposit0_177: ctc16,
    Admin_editUserReward0_177: ctc17,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc15,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2156 = ctc.selfAddress();
  const v2158 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_addAdmin0_177" (defined at: ./token.rsh:193:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v2161 = stdlib.addressEq(v2156, v2017);
  const v2162 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2156, ctc0), null);
  const v2163 = {
    None: 0,
    Some: 1
    }[v2162[0]];
  const v2164 = stdlib.eq(v2163, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2165 = v2161 ? true : v2164;
  stdlib.assert(v2165, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_addAdmin0_177" (defined at: ./token.rsh:193:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v2172 = ['Admin_addAdmin0_177', v2158];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2172],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:199:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:199:14:decimal', stdlib.UInt_max, '0'), v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2360, ctc0), null);
          ;
          ;
          const v2490 = v2364[stdlib.checkedBigNumberify('./token.rsh:193:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v2490, ctc0, null);
          const v2499 = null;
          const v2500 = await txn1.getOutput('Admin_addAdmin', 'v2499', ctc0, v2499);
          
          const v2507 = v2031.keepGoing;
          const v2508 = v2031.percent;
          const v2513 = {
            bal: v2083,
            keepGoing: v2507,
            percent: v2508,
            total_amount_claimed: v2081,
            total_rewards_allcoated: v2084,
            total_users_claim: v2080,
            usersNo: v2082
            };
          const v8692 = v2513;
          const v8694 = v2034;
          const v8695 = v2035;
          const v8696 = v2513.keepGoing;
          if (v8696) {
            const v8697 = v2513.total_users_claim;
            const v8698 = v2513.total_amount_claimed;
            const v8699 = v2513.usersNo;
            const v8700 = v2513.bal;
            const v8701 = v2513.total_rewards_allcoated;
            const v8702 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8703 = v8702[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8708 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8709 = v8708[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: v2019
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2019
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      undefined /* setApiDetails */;
      const v2370 = stdlib.addressEq(v2360, v2017);
      const v2371 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2360, ctc0), null);
      const v2372 = {
        None: 0,
        Some: 1
        }[v2371[0]];
      const v2373 = stdlib.eq(v2372, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2374 = v2370 ? true : v2373;
      stdlib.assert(v2374, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      ;
      const v2490 = v2364[stdlib.checkedBigNumberify('./token.rsh:193:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v2490, ctc0, null);
      const v2499 = null;
      const v2500 = await txn1.getOutput('Admin_addAdmin', 'v2499', ctc0, v2499);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v2364, v2500), {
          at: './token.rsh:193:11:application',
          fs: ['at ./token.rsh:193:11:application call to [unknown function] (defined at: ./token.rsh:193:11:function exp)', 'at ./token.rsh:202:14:application call to "ret" (defined at: ./token.rsh:200:15:function exp)', 'at ./token.rsh:200:15:application call to [unknown function] (defined at: ./token.rsh:200:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v2507 = v2031.keepGoing;
      const v2508 = v2031.percent;
      const v2513 = {
        bal: v2083,
        keepGoing: v2507,
        percent: v2508,
        total_amount_claimed: v2081,
        total_rewards_allcoated: v2084,
        total_users_claim: v2080,
        usersNo: v2082
        };
      const v8692 = v2513;
      const v8694 = v2034;
      const v8695 = v2035;
      const v8696 = v2513.keepGoing;
      if (v8696) {
        const v8697 = v2513.total_users_claim;
        const v8698 = v2513.total_amount_claimed;
        const v8699 = v2513.usersNo;
        const v8700 = v2513.bal;
        const v8701 = v2513.total_rewards_allcoated;
        const v8702 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8703 = v8702[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8708 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8709 = v8708[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc15,
    Admin_editUserReward0_177: ctc17,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2087 = ctc.selfAddress();
  const v2089 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_deposit0_177" (defined at: ./token.rsh:121:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v2090 = v2089[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2092 = stdlib.addressEq(v2087, v2017);
  const v2093 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2087, ctc0), null);
  const v2094 = {
    None: 0,
    Some: 1
    }[v2093[0]];
  const v2095 = stdlib.eq(v2094, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2096 = v2092 ? true : v2095;
  stdlib.assert(v2096, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_deposit0_177" (defined at: ./token.rsh:121:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v2103 = ['Admin_deposit0_177', v2089];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2103],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:124:10:decimal', stdlib.UInt_max, '0'), [[v2090, v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v2868 = v2849[stdlib.checkedBigNumberify('./token.rsh:121:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2360, ctc0), null);
          ;
          const v2970 = stdlib.add(v2086, v2868);
          const v2972 = stdlib.Array_set(v2085, '0', v2970);
          const v2973 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v2972);
          sim_r.txns.push({
            amt: v2868,
            kind: 'to',
            tok: v2019
            });
          const v3009 = null;
          const v3010 = await txn1.getOutput('Admin_deposit', 'v3009', ctc0, v3009);
          
          const v3017 = v2031.keepGoing;
          const v3018 = v2031.percent;
          const v3023 = stdlib.safeAdd(v2083, v2868);
          const v3024 = {
            bal: v3023,
            keepGoing: v3017,
            percent: v3018,
            total_amount_claimed: v2081,
            total_rewards_allcoated: v2084,
            total_users_claim: v2080,
            usersNo: v2082
            };
          const v8908 = v3024;
          const v8910 = v2973;
          const v8911 = v2035;
          const v8912 = v3024.keepGoing;
          if (v8912) {
            const v8913 = v3024.total_users_claim;
            const v8914 = v3024.total_amount_claimed;
            const v8915 = v3024.usersNo;
            const v8916 = v3024.bal;
            const v8917 = v3024.total_rewards_allcoated;
            const v8918 = v2973[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8919 = v8918[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v8924 = v2973[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v8925 = v8924[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: v2019
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2019
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      undefined /* setApiDetails */;
      const v2868 = v2849[stdlib.checkedBigNumberify('./token.rsh:121:10:spread', stdlib.UInt_max, '0')];
      const v2869 = stdlib.addressEq(v2360, v2017);
      const v2870 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2360, ctc0), null);
      const v2871 = {
        None: 0,
        Some: 1
        }[v2870[0]];
      const v2872 = stdlib.eq(v2871, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2873 = v2869 ? true : v2872;
      stdlib.assert(v2873, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      ;
      const v2970 = stdlib.add(v2086, v2868);
      const v2972 = stdlib.Array_set(v2085, '0', v2970);
      const v2973 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v2972);
      ;
      const v3009 = null;
      const v3010 = await txn1.getOutput('Admin_deposit', 'v3009', ctc0, v3009);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v2849, v3010), {
          at: './token.rsh:121:11:application',
          fs: ['at ./token.rsh:121:11:application call to [unknown function] (defined at: ./token.rsh:121:11:function exp)', 'at ./token.rsh:126:14:application call to "ret" (defined at: ./token.rsh:125:15:function exp)', 'at ./token.rsh:125:15:application call to [unknown function] (defined at: ./token.rsh:125:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v3017 = v2031.keepGoing;
      const v3018 = v2031.percent;
      const v3023 = stdlib.safeAdd(v2083, v2868);
      const v3024 = {
        bal: v3023,
        keepGoing: v3017,
        percent: v3018,
        total_amount_claimed: v2081,
        total_rewards_allcoated: v2084,
        total_users_claim: v2080,
        usersNo: v2082
        };
      const v8908 = v3024;
      const v8910 = v2973;
      const v8911 = v2035;
      const v8912 = v3024.keepGoing;
      if (v8912) {
        const v8913 = v3024.total_users_claim;
        const v8914 = v3024.total_amount_claimed;
        const v8915 = v3024.usersNo;
        const v8916 = v3024.bal;
        const v8917 = v3024.total_rewards_allcoated;
        const v8918 = v2973[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8919 = v8918[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v8924 = v2973[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v8925 = v8924[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc15,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2130 = ctc.selfAddress();
  const v2132 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_editUserReward0_177" (defined at: ./token.rsh:180:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v2134 = v2132[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2137 = stdlib.addressEq(v2130, v2017);
  const v2138 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2130, ctc0), null);
  const v2139 = {
    None: 0,
    Some: 1
    }[v2138[0]];
  const v2140 = stdlib.eq(v2139, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2141 = v2137 ? true : v2140;
  stdlib.assert(v2141, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:181:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_editUserReward0_177" (defined at: ./token.rsh:180:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v2145 = stdlib.le(v2134, v2086);
  stdlib.assert(v2145, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_editUserReward0_177" (defined at: ./token.rsh:180:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v2154 = ['Admin_editUserReward0_177', v2132];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2154],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:185:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:185:14:decimal', stdlib.UInt_max, '0'), v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v3368 = v3334[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2360, ctc0), null);
          ;
          ;
          const v3512 = v3334[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v3512, ctc1, v3368);
          const v3526 = null;
          const v3527 = await txn1.getOutput('Admin_editUserReward', 'v3526', ctc0, v3526);
          
          const v3535 = v2031.keepGoing;
          const v3536 = v2031.percent;
          const v3541 = {
            bal: v2083,
            keepGoing: v3535,
            percent: v3536,
            total_amount_claimed: v2081,
            total_rewards_allcoated: v2084,
            total_users_claim: v2080,
            usersNo: v2082
            };
          const v9124 = v3541;
          const v9126 = v2034;
          const v9127 = v2035;
          const v9128 = v3541.keepGoing;
          if (v9128) {
            const v9129 = v3541.total_users_claim;
            const v9130 = v3541.total_amount_claimed;
            const v9131 = v3541.usersNo;
            const v9132 = v3541.bal;
            const v9133 = v3541.total_rewards_allcoated;
            const v9134 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9135 = v9134[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v9140 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9141 = v9140[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: v2019
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2019
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      undefined /* setApiDetails */;
      const v3368 = v3334[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '1')];
      const v3369 = stdlib.addressEq(v2360, v2017);
      const v3370 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2360, ctc0), null);
      const v3371 = {
        None: 0,
        Some: 1
        }[v3370[0]];
      const v3372 = stdlib.eq(v3371, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3373 = v3369 ? true : v3372;
      stdlib.assert(v3373, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:181:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v3377 = stdlib.le(v3368, v2086);
      stdlib.assert(v3377, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      ;
      const v3512 = v3334[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v3512, ctc1, v3368);
      const v3526 = null;
      const v3527 = await txn1.getOutput('Admin_editUserReward', 'v3526', ctc0, v3526);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v3334, v3527), {
          at: './token.rsh:180:11:application',
          fs: ['at ./token.rsh:180:11:application call to [unknown function] (defined at: ./token.rsh:180:11:function exp)', 'at ./token.rsh:188:14:application call to "ret" (defined at: ./token.rsh:186:15:function exp)', 'at ./token.rsh:186:15:application call to [unknown function] (defined at: ./token.rsh:186:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v3535 = v2031.keepGoing;
      const v3536 = v2031.percent;
      const v3541 = {
        bal: v2083,
        keepGoing: v3535,
        percent: v3536,
        total_amount_claimed: v2081,
        total_rewards_allcoated: v2084,
        total_users_claim: v2080,
        usersNo: v2082
        };
      const v9124 = v3541;
      const v9126 = v2034;
      const v9127 = v2035;
      const v9128 = v3541.keepGoing;
      if (v9128) {
        const v9129 = v3541.total_users_claim;
        const v9130 = v3541.total_amount_claimed;
        const v9131 = v3541.usersNo;
        const v9132 = v3541.bal;
        const v9133 = v3541.total_rewards_allcoated;
        const v9134 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9135 = v9134[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v9140 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9141 = v9140[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc15,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc15
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2220 = ctc.selfAddress();
  const v2222 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:323:44:application call to [unknown function] (defined at: ./token.rsh:323:44:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_endContractAndTransfer0_177" (defined at: ./token.rsh:323:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v2223 = stdlib.addressEq(v2017, v2220);
  stdlib.assert(v2223, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:323:44:application call to [unknown function] (defined at: ./token.rsh:323:44:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_endContractAndTransfer0_177" (defined at: ./token.rsh:323:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v2228 = ['Admin_endContractAndTransfer0_177', v2222];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2228],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:326:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:326:14:decimal', stdlib.UInt_max, '0'), v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          ;
          const v4031 = null;
          const v4032 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4031', ctc0, v4031);
          
          const v4039 = v2031.percent;
          const v4044 = {
            bal: v2083,
            keepGoing: false,
            percent: v4039,
            total_amount_claimed: v2081,
            total_rewards_allcoated: v2084,
            total_users_claim: v2080,
            usersNo: v2082
            };
          const v9340 = v4044;
          const v9342 = v2034;
          const v9343 = v2035;
          const v9344 = v4044.keepGoing;
          if (v9344) {
            const v9345 = v4044.total_users_claim;
            const v9346 = v4044.total_amount_claimed;
            const v9347 = v4044.usersNo;
            const v9348 = v4044.bal;
            const v9349 = v4044.total_rewards_allcoated;
            const v9350 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9351 = v9350[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v9356 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9357 = v9356[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: v2019
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2019
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      undefined /* setApiDetails */;
      const v3871 = stdlib.addressEq(v2017, v2360);
      stdlib.assert(v3871, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:323:44:application call to [unknown function] (defined at: ./token.rsh:323:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:323:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      ;
      const v4031 = null;
      const v4032 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4031', ctc0, v4031);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v3819, v4032), {
          at: './token.rsh:323:11:application',
          fs: ['at ./token.rsh:323:11:application call to [unknown function] (defined at: ./token.rsh:323:11:function exp)', 'at ./token.rsh:328:14:application call to "ret" (defined at: ./token.rsh:327:15:function exp)', 'at ./token.rsh:327:15:application call to [unknown function] (defined at: ./token.rsh:327:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v4039 = v2031.percent;
      const v4044 = {
        bal: v2083,
        keepGoing: false,
        percent: v4039,
        total_amount_claimed: v2081,
        total_rewards_allcoated: v2084,
        total_users_claim: v2080,
        usersNo: v2082
        };
      const v9340 = v4044;
      const v9342 = v2034;
      const v9343 = v2035;
      const v9344 = v4044.keepGoing;
      if (v9344) {
        const v9345 = v4044.total_users_claim;
        const v9346 = v4044.total_amount_claimed;
        const v9347 = v4044.usersNo;
        const v9348 = v4044.bal;
        const v9349 = v4044.total_rewards_allcoated;
        const v9350 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9351 = v9350[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v9356 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9357 = v9356[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc15,
    Admin_deposit0_177: ctc16,
    Admin_editUserReward0_177: ctc17,
    Admin_endContractAndTransfer0_177: ctc18,
    Admin_revokeAdmin0_177: ctc15,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc18
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2174 = ctc.selfAddress();
  const v2176 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_revokeAdmin0_177" (defined at: ./token.rsh:207:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v2179 = stdlib.addressEq(v2174, v2017);
  stdlib.assert(v2179, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_revokeAdmin0_177" (defined at: ./token.rsh:207:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v2186 = ['Admin_revokeAdmin0_177', v2176];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2186],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:210:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:210:14:decimal', stdlib.UInt_max, '0'), v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          ;
          const v4532 = v4304[stdlib.checkedBigNumberify('./token.rsh:207:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v4532, ctc0, undefined /* Nothing */);
          const v4537 = null;
          const v4538 = await txn1.getOutput('Admin_revokeAdmin', 'v4537', ctc0, v4537);
          
          const v4545 = v2031.keepGoing;
          const v4546 = v2031.percent;
          const v4551 = {
            bal: v2083,
            keepGoing: v4545,
            percent: v4546,
            total_amount_claimed: v2081,
            total_rewards_allcoated: v2084,
            total_users_claim: v2080,
            usersNo: v2082
            };
          const v9556 = v4551;
          const v9558 = v2034;
          const v9559 = v2035;
          const v9560 = v4551.keepGoing;
          if (v9560) {
            const v9561 = v4551.total_users_claim;
            const v9562 = v4551.total_amount_claimed;
            const v9563 = v4551.usersNo;
            const v9564 = v4551.bal;
            const v9565 = v4551.total_rewards_allcoated;
            const v9566 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9567 = v9566[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v9572 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9573 = v9572[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: v2019
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2019
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      undefined /* setApiDetails */;
      const v4366 = stdlib.addressEq(v2360, v2017);
      stdlib.assert(v4366, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      ;
      const v4532 = v4304[stdlib.checkedBigNumberify('./token.rsh:207:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v4532, ctc0, undefined /* Nothing */);
      const v4537 = null;
      const v4538 = await txn1.getOutput('Admin_revokeAdmin', 'v4537', ctc0, v4537);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v4304, v4538), {
          at: './token.rsh:207:11:application',
          fs: ['at ./token.rsh:207:11:application call to [unknown function] (defined at: ./token.rsh:207:11:function exp)', 'at ./token.rsh:213:14:application call to "ret" (defined at: ./token.rsh:211:15:function exp)', 'at ./token.rsh:211:15:application call to [unknown function] (defined at: ./token.rsh:211:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v4545 = v2031.keepGoing;
      const v4546 = v2031.percent;
      const v4551 = {
        bal: v2083,
        keepGoing: v4545,
        percent: v4546,
        total_amount_claimed: v2081,
        total_rewards_allcoated: v2084,
        total_users_claim: v2080,
        usersNo: v2082
        };
      const v9556 = v4551;
      const v9558 = v2034;
      const v9559 = v2035;
      const v9560 = v4551.keepGoing;
      if (v9560) {
        const v9561 = v4551.total_users_claim;
        const v9562 = v4551.total_amount_claimed;
        const v9563 = v4551.usersNo;
        const v9564 = v4551.bal;
        const v9565 = v4551.total_rewards_allcoated;
        const v9566 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9567 = v9566[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v9572 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9573 = v9572[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc19,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc15,
    User_claim0_177: ctc20,
    User_optin0_177: ctc19
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc8]);
  
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2107 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_setReward0_177" (defined at: ./token.rsh:134:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v2108 = v2107[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2110 = v2107[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2114 = stdlib.gt(v2110, v2083);
  const v2115 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v2108, ctc0), null);
  const v2116 = {
    None: 0,
    Some: 1
    }[v2115[0]];
  const v2117 = stdlib.eq(v2116, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2117, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to "runAdmin_setReward0_177" (defined at: ./token.rsh:134:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v2128 = ['Admin_setReward0_177', v2107];
  
  const v2320 = v2114 ? v2110 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2128],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:139:10:decimal', stdlib.UInt_max, '0'), [[v2320, v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v4860 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '0')];
          const v4862 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '2')];
          const v4863 = stdlib.gt(v4862, v2083);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v4860, ctc0), null);
          const v4868 = v4863 ? v4862 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
          ;
          const v4910 = stdlib.add(v2086, v4868);
          const v4912 = stdlib.Array_set(v2085, '0', v4910);
          const v4913 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v4912);
          sim_r.txns.push({
            amt: v4868,
            kind: 'to',
            tok: v2019
            });
          const v5040 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '1')];
          const v5050 = [v4860, v5040];
          const v5051 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v5050, ctc3), null);
          const v5052 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5053 = stdlib.fromSome(v5051, v5052);
          const v5055 = v5053.claimed;
          const v5056 = v5053.rewards;
          const v5058 = stdlib.safeAdd(v5056, v4862);
          const v5059 = {
            claimed: v5055,
            rewards: v5058
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v5050, ctc3, v5059);
          const v5060 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v4860, ctc1), null);
          const v5061 = stdlib.fromSome(v5060, stdlib.checkedBigNumberify('./token.rsh:149:60:decimal', stdlib.UInt_max, '0'));
          const v5065 = stdlib.safeAdd(v5061, v4862);
          await stdlib.simMapSet(sim_r, 0, ctc6, v4860, ctc1, v5065);
          const v5066 = true;
          const v5067 = await txn1.getOutput('Admin_setReward', 'v5066', ctc9, v5066);
          
          const v5076 = v2031.keepGoing;
          const v5077 = v2031.percent;
          let v5082;
          if (v4863) {
            const v5083 = stdlib.safeAdd(v2083, v4862);
            v5082 = v5083;
            }
          else {
            v5082 = v2083;
            }
          const v5084 = {
            bal: v5082,
            keepGoing: v5076,
            percent: v5077,
            total_amount_claimed: v2081,
            total_rewards_allcoated: v2084,
            total_users_claim: v2080,
            usersNo: v2082
            };
          const v9772 = v5084;
          const v9774 = v4913;
          const v9775 = v2035;
          const v9776 = v5084.keepGoing;
          if (v9776) {
            const v9777 = v5084.total_users_claim;
            const v9778 = v5084.total_amount_claimed;
            const v9779 = v5084.usersNo;
            const v9780 = v5084.bal;
            const v9781 = v5084.total_rewards_allcoated;
            const v9782 = v4913[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9783 = v9782[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v9788 = v4913[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9789 = v9788[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: v2019
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2019
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      undefined /* setApiDetails */;
      const v4860 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '0')];
      const v4862 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '2')];
      const v4863 = stdlib.gt(v4862, v2083);
      const v4864 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v4860, ctc0), null);
      const v4865 = {
        None: 0,
        Some: 1
        }[v4864[0]];
      const v4866 = stdlib.eq(v4865, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4866, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v4868 = v4863 ? v4862 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
      ;
      const v4910 = stdlib.add(v2086, v4868);
      const v4912 = stdlib.Array_set(v2085, '0', v4910);
      const v4913 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v4912);
      ;
      const v5040 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '1')];
      const v5050 = [v4860, v5040];
      const v5051 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v5050, ctc3), null);
      const v5052 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5053 = stdlib.fromSome(v5051, v5052);
      const v5055 = v5053.claimed;
      const v5056 = v5053.rewards;
      const v5058 = stdlib.safeAdd(v5056, v4862);
      const v5059 = {
        claimed: v5055,
        rewards: v5058
        };
      await stdlib.mapSet(map1, ctc22, v5050, ctc3, v5059);
      const v5060 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4860, ctc1), null);
      const v5061 = stdlib.fromSome(v5060, stdlib.checkedBigNumberify('./token.rsh:149:60:decimal', stdlib.UInt_max, '0'));
      const v5065 = stdlib.safeAdd(v5061, v4862);
      await stdlib.mapSet(map0, ctc6, v4860, ctc1, v5065);
      const v5066 = true;
      const v5067 = await txn1.getOutput('Admin_setReward', 'v5066', ctc9, v5066);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v4789, v5067), {
          at: './token.rsh:134:11:application',
          fs: ['at ./token.rsh:134:11:application call to [unknown function] (defined at: ./token.rsh:134:11:function exp)', 'at ./token.rsh:152:16:application call to "ret" (defined at: ./token.rsh:140:15:function exp)', 'at ./token.rsh:140:15:application call to [unknown function] (defined at: ./token.rsh:140:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      const v5076 = v2031.keepGoing;
      const v5077 = v2031.percent;
      let v5082;
      if (v4863) {
        const v5083 = stdlib.safeAdd(v2083, v4862);
        v5082 = v5083;
        }
      else {
        v5082 = v2083;
        }
      const v5084 = {
        bal: v5082,
        keepGoing: v5076,
        percent: v5077,
        total_amount_claimed: v2081,
        total_rewards_allcoated: v2084,
        total_users_claim: v2080,
        usersNo: v2082
        };
      const v9772 = v5084;
      const v9774 = v4913;
      const v9775 = v2035;
      const v9776 = v5084.keepGoing;
      if (v9776) {
        const v9777 = v5084.total_users_claim;
        const v9778 = v5084.total_amount_claimed;
        const v9779 = v5084.usersNo;
        const v9780 = v5084.bal;
        const v9781 = v5084.total_rewards_allcoated;
        const v9782 = v4913[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9783 = v9782[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v9788 = v4913[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v9789 = v9788[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
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
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc8, ctc7, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc15 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc9,
    Admin_deposit0_177: ctc10,
    Admin_editUserReward0_177: ctc11,
    Admin_endContractAndTransfer0_177: ctc12,
    Admin_revokeAdmin0_177: ctc9,
    Admin_setReward0_177: ctc13,
    User_claim0_177: ctc14,
    User_optin0_177: ctc12
    });
  const ctc16 = stdlib.T_Tuple([ctc8, ctc7]);
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
  
  
  const v2008 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2009 = [v2008];
  const v2013 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2014 = stdlib.protect(ctc7, interact.tok, 'for Deployer\'s interact field tok');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2013, v2014],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc7],
    pay: [stdlib.checkedBigNumberify('./token.rsh:61:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2018, v2019], secs: v2021, time: v2020, didSend: v29, from: v2017 } = txn1;
      
      const v2022 = v2009[stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0')];
      const v2023 = stdlib.Array_set(v2022, '0', stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'));
      const v2024 = stdlib.Array_set(v2009, stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'), v2023);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2019
        });
      ;
      const v2026 = await ctc.getContractInfo();
      
      const v2028 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v2029 = {
        i: v2028,
        sign: true
        };
      const v2030 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v2029,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2031 = v2030;
      const v2032 = v2020;
      const v2034 = v2024;
      const v2035 = stdlib.checkedBigNumberify('./token.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v2054 = v2031.keepGoing;
        
        return v2054;})()) {
        const v2080 = v2031.total_users_claim;
        const v2081 = v2031.total_amount_claimed;
        const v2082 = v2031.usersNo;
        const v2083 = v2031.bal;
        const v2084 = v2031.total_rewards_allcoated;
        const v2085 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v2086 = v2085[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v6274 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v6275 = v6274[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2017,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2017,
          tok: v2019
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2019
          })
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
    tys: [ctc6, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2018, v2019], secs: v2021, time: v2020, didSend: v29, from: v2017 } = txn1;
  const v2022 = v2009[stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0')];
  const v2023 = stdlib.Array_set(v2022, '0', stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'));
  const v2024 = stdlib.Array_set(v2009, stdlib.checkedBigNumberify('./token.rsh:61:12:dot', stdlib.UInt_max, '0'), v2023);
  ;
  ;
  const v2026 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2026), {
    at: './token.rsh:63:27:application',
    fs: ['at ./token.rsh:63:27:application call to [unknown function] (defined at: ./token.rsh:63:27:function exp)', 'at ./token.rsh:63:27:application call to "liftedInteract" (defined at: ./token.rsh:63:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2028 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v2029 = {
    i: v2028,
    sign: true
    };
  const v2030 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v2029,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2031 = v2030;
  let v2032 = v2020;
  let v2034 = v2024;
  let v2035 = stdlib.checkedBigNumberify('./token.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v2054 = v2031.keepGoing;
    
    return v2054;})()) {
    const v2080 = v2031.total_users_claim;
    const v2081 = v2031.total_amount_claimed;
    const v2082 = v2031.usersNo;
    const v2083 = v2031.bal;
    const v2084 = v2031.total_rewards_allcoated;
    const v2085 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
    const v2086 = v2085[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn3;
    switch (v2361[0]) {
      case 'Admin_addAdmin0_177': {
        const v2364 = v2361[1];
        undefined /* setApiDetails */;
        const v2370 = stdlib.addressEq(v2360, v2017);
        const v2371 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2360, ctc0), null);
        const v2372 = {
          None: 0,
          Some: 1
          }[v2371[0]];
        const v2373 = stdlib.eq(v2372, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2374 = v2370 ? true : v2373;
        stdlib.assert(v2374, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:193:34:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:193:34:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        ;
        const v2490 = v2364[stdlib.checkedBigNumberify('./token.rsh:193:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v2490, ctc0, null);
        const v2499 = null;
        await txn3.getOutput('Admin_addAdmin', 'v2499', ctc0, v2499);
        const v2507 = v2031.keepGoing;
        const v2508 = v2031.percent;
        const v2513 = {
          bal: v2083,
          keepGoing: v2507,
          percent: v2508,
          total_amount_claimed: v2081,
          total_rewards_allcoated: v2084,
          total_users_claim: v2080,
          usersNo: v2082
          };
        const cv2031 = v2513;
        const cv2032 = v2362;
        const cv2034 = v2034;
        const cv2035 = v2035;
        
        v2031 = cv2031;
        v2032 = cv2032;
        v2034 = cv2034;
        v2035 = cv2035;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_177': {
        const v2849 = v2361[1];
        undefined /* setApiDetails */;
        const v2868 = v2849[stdlib.checkedBigNumberify('./token.rsh:121:10:spread', stdlib.UInt_max, '0')];
        const v2869 = stdlib.addressEq(v2360, v2017);
        const v2870 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2360, ctc0), null);
        const v2871 = {
          None: 0,
          Some: 1
          }[v2870[0]];
        const v2872 = stdlib.eq(v2871, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2873 = v2869 ? true : v2872;
        stdlib.assert(v2873, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:121:32:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:121:32:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        ;
        const v2970 = stdlib.add(v2086, v2868);
        const v2972 = stdlib.Array_set(v2085, '0', v2970);
        const v2973 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v2972);
        ;
        const v3009 = null;
        await txn3.getOutput('Admin_deposit', 'v3009', ctc0, v3009);
        const v3017 = v2031.keepGoing;
        const v3018 = v2031.percent;
        const v3023 = stdlib.safeAdd(v2083, v2868);
        const v3024 = {
          bal: v3023,
          keepGoing: v3017,
          percent: v3018,
          total_amount_claimed: v2081,
          total_rewards_allcoated: v2084,
          total_users_claim: v2080,
          usersNo: v2082
          };
        const cv2031 = v3024;
        const cv2032 = v2362;
        const cv2034 = v2973;
        const cv2035 = v2035;
        
        v2031 = cv2031;
        v2032 = cv2032;
        v2034 = cv2034;
        v2035 = cv2035;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_177': {
        const v3334 = v2361[1];
        undefined /* setApiDetails */;
        const v3368 = v3334[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '1')];
        const v3369 = stdlib.addressEq(v2360, v2017);
        const v3370 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2360, ctc0), null);
        const v3371 = {
          None: 0,
          Some: 1
          }[v3370[0]];
        const v3372 = stdlib.eq(v3371, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3373 = v3369 ? true : v3372;
        stdlib.assert(v3373, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:181:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v3377 = stdlib.le(v3368, v2086);
        stdlib.assert(v3377, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:182:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:180:45:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:180:45:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        ;
        const v3512 = v3334[stdlib.checkedBigNumberify('./token.rsh:180:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc8, v3512, ctc1, v3368);
        const v3526 = null;
        await txn3.getOutput('Admin_editUserReward', 'v3526', ctc0, v3526);
        const v3535 = v2031.keepGoing;
        const v3536 = v2031.percent;
        const v3541 = {
          bal: v2083,
          keepGoing: v3535,
          percent: v3536,
          total_amount_claimed: v2081,
          total_rewards_allcoated: v2084,
          total_users_claim: v2080,
          usersNo: v2082
          };
        const cv2031 = v3541;
        const cv2032 = v2362;
        const cv2034 = v2034;
        const cv2035 = v2035;
        
        v2031 = cv2031;
        v2032 = cv2032;
        v2034 = cv2034;
        v2035 = cv2035;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_177': {
        const v3819 = v2361[1];
        undefined /* setApiDetails */;
        const v3871 = stdlib.addressEq(v2017, v2360);
        stdlib.assert(v3871, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:323:44:application call to [unknown function] (defined at: ./token.rsh:323:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:323:44:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        ;
        const v4031 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v4031', ctc0, v4031);
        const v4039 = v2031.percent;
        const v4044 = {
          bal: v2083,
          keepGoing: false,
          percent: v4039,
          total_amount_claimed: v2081,
          total_rewards_allcoated: v2084,
          total_users_claim: v2080,
          usersNo: v2082
          };
        const cv2031 = v4044;
        const cv2032 = v2362;
        const cv2034 = v2034;
        const cv2035 = v2035;
        
        v2031 = cv2031;
        v2032 = cv2032;
        v2034 = cv2034;
        v2035 = cv2035;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_177': {
        const v4304 = v2361[1];
        undefined /* setApiDetails */;
        const v4366 = stdlib.addressEq(v2360, v2017);
        stdlib.assert(v4366, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:207:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:207:37:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        ;
        const v4532 = v4304[stdlib.checkedBigNumberify('./token.rsh:207:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v4532, ctc0, undefined /* Nothing */);
        const v4537 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v4537', ctc0, v4537);
        const v4545 = v2031.keepGoing;
        const v4546 = v2031.percent;
        const v4551 = {
          bal: v2083,
          keepGoing: v4545,
          percent: v4546,
          total_amount_claimed: v2081,
          total_rewards_allcoated: v2084,
          total_users_claim: v2080,
          usersNo: v2082
          };
        const cv2031 = v4551;
        const cv2032 = v2362;
        const cv2034 = v2034;
        const cv2035 = v2035;
        
        v2031 = cv2031;
        v2032 = cv2032;
        v2034 = cv2034;
        v2035 = cv2035;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_177': {
        const v4789 = v2361[1];
        undefined /* setApiDetails */;
        const v4860 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '0')];
        const v4862 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '2')];
        const v4863 = stdlib.gt(v4862, v2083);
        const v4864 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc8, v4860, ctc0), null);
        const v4865 = {
          None: 0,
          Some: 1
          }[v4864[0]];
        const v4866 = stdlib.eq(v4865, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4866, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:134:49:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:134:49:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v4868 = v4863 ? v4862 : stdlib.checkedBigNumberify('./token.rsh:139:35:decimal', stdlib.UInt_max, '0');
        ;
        const v4910 = stdlib.add(v2086, v4868);
        const v4912 = stdlib.Array_set(v2085, '0', v4910);
        const v4913 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:81:37:dot', stdlib.UInt_max, '0'), v4912);
        ;
        const v5040 = v4789[stdlib.checkedBigNumberify('./token.rsh:134:10:spread', stdlib.UInt_max, '1')];
        const v5050 = [v4860, v5040];
        const v5051 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5050, ctc3), null);
        const v5052 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5053 = stdlib.fromSome(v5051, v5052);
        const v5055 = v5053.claimed;
        const v5056 = v5053.rewards;
        const v5058 = stdlib.safeAdd(v5056, v4862);
        const v5059 = {
          claimed: v5055,
          rewards: v5058
          };
        await stdlib.mapSet(map1, ctc16, v5050, ctc3, v5059);
        const v5060 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4860, ctc1), null);
        const v5061 = stdlib.fromSome(v5060, stdlib.checkedBigNumberify('./token.rsh:149:60:decimal', stdlib.UInt_max, '0'));
        const v5065 = stdlib.safeAdd(v5061, v4862);
        await stdlib.mapSet(map0, ctc8, v4860, ctc1, v5065);
        const v5066 = true;
        await txn3.getOutput('Admin_setReward', 'v5066', ctc17, v5066);
        const v5076 = v2031.keepGoing;
        const v5077 = v2031.percent;
        let v5082;
        if (v4863) {
          const v5083 = stdlib.safeAdd(v2083, v4862);
          v5082 = v5083;
          }
        else {
          v5082 = v2083;
          }
        const v5084 = {
          bal: v5082,
          keepGoing: v5076,
          percent: v5077,
          total_amount_claimed: v2081,
          total_rewards_allcoated: v2084,
          total_users_claim: v2080,
          usersNo: v2082
          };
        const cv2031 = v5084;
        const cv2032 = v2362;
        const cv2034 = v4913;
        const cv2035 = v2035;
        
        v2031 = cv2031;
        v2032 = cv2032;
        v2034 = cv2034;
        v2035 = cv2035;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_177': {
        const v5274 = v2361[1];
        undefined /* setApiDetails */;
        const v5361 = v5274[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '0')];
        const v5363 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2360, ctc1), null);
        const v5364 = stdlib.fromSome(v5363, stdlib.checkedBigNumberify('./token.rsh:267:56:decimal', stdlib.UInt_max, '0'));
        const v5367 = stdlib.le(v5361, v2086);
        stdlib.assert(v5367, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5369 = stdlib.ge(v5364, v5361);
        stdlib.assert(v5369, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        ;
        const v5615 = v5274[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '1')];
        const v5630 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v2360, ctc0), null);
        const v5631 = {
          None: 0,
          Some: 1
          }[v5630[0]];
        const v5632 = stdlib.eq(v5631, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5633 = [v2360, v5615];
        const v5634 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5633, ctc3), null);
        const v5635 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5636 = stdlib.fromSome(v5634, v5635);
        const v5638 = v5636.claimed;
        const v5639 = v5636.rewards;
        const v5641 = stdlib.safeAdd(v5638, v5361);
        const v5643 = stdlib.safeSub(v5639, v5361);
        const v5644 = {
          claimed: v5641,
          rewards: v5643
          };
        await stdlib.mapSet(map1, ctc16, v5633, ctc3, v5644);
        const v5645 = true;
        await txn3.getOutput('User_claim', 'v5645', ctc17, v5645);
        const v5653 = {
          addr: v2360,
          amount: v5361,
          projectName: v2018
          };
        null;
        if (v5632) {
          const v5704 = stdlib.sub(v2086, v5361);
          const v5706 = stdlib.Array_set(v2085, '0', v5704);
          const v5707 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5706);
          ;
          const v5710 = stdlib.eq(v5364, stdlib.checkedBigNumberify('./token.rsh:295:23:decimal', stdlib.UInt_max, '0'));
          if (v5710) {
            await stdlib.mapSet(map0, ctc8, v2360, ctc1, undefined /* Nothing */);
            const v5712 = v2031.keepGoing;
            const v5713 = v2031.percent;
            const v5720 = stdlib.safeAdd(v2082, stdlib.checkedBigNumberify('./token.rsh:302:56:decimal', stdlib.UInt_max, '1'));
            const v5721 = stdlib.safeSub(v2083, v5361);
            const v5722 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v5723 = stdlib.safeAdd(v2081, v5361);
            const v5724 = {
              bal: v5721,
              keepGoing: v5712,
              percent: v5713,
              total_amount_claimed: v5723,
              total_rewards_allcoated: v2084,
              total_users_claim: v5722,
              usersNo: v5720
              };
            const cv2031 = v5724;
            const cv2032 = v2362;
            const cv2034 = v5707;
            const cv2035 = v2035;
            
            v2031 = cv2031;
            v2032 = cv2032;
            v2034 = cv2034;
            v2035 = cv2035;
            
            txn2 = txn3;
            continue;}
          else {
            const v5726 = stdlib.safeSub(v5364, v5361);
            await stdlib.mapSet(map0, ctc8, v2360, ctc1, v5726);
            const v5728 = v2031.keepGoing;
            const v5729 = v2031.percent;
            const v5736 = stdlib.safeAdd(v2082, stdlib.checkedBigNumberify('./token.rsh:302:56:decimal', stdlib.UInt_max, '1'));
            const v5737 = stdlib.safeSub(v2083, v5361);
            const v5738 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v5739 = stdlib.safeAdd(v2081, v5361);
            const v5740 = {
              bal: v5737,
              keepGoing: v5728,
              percent: v5729,
              total_amount_claimed: v5739,
              total_rewards_allcoated: v2084,
              total_users_claim: v5738,
              usersNo: v5736
              };
            const cv2031 = v5740;
            const cv2032 = v2362;
            const cv2034 = v5707;
            const cv2035 = v2035;
            
            v2031 = cv2031;
            v2032 = cv2032;
            v2034 = cv2034;
            v2035 = cv2035;
            
            txn2 = txn3;
            continue;}}
        else {
          await stdlib.mapSet(map3, ctc8, v2360, ctc0, null);
          const v5661 = stdlib.sub(v2086, v5361);
          const v5663 = stdlib.Array_set(v2085, '0', v5661);
          const v5664 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5663);
          ;
          const v5667 = stdlib.eq(v5364, stdlib.checkedBigNumberify('./token.rsh:295:23:decimal', stdlib.UInt_max, '0'));
          if (v5667) {
            await stdlib.mapSet(map0, ctc8, v2360, ctc1, undefined /* Nothing */);
            const v5669 = v2031.keepGoing;
            const v5670 = v2031.percent;
            const v5678 = stdlib.safeSub(v2083, v5361);
            const v5679 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v5680 = stdlib.safeAdd(v2081, v5361);
            const v5681 = {
              bal: v5678,
              keepGoing: v5669,
              percent: v5670,
              total_amount_claimed: v5680,
              total_rewards_allcoated: v2084,
              total_users_claim: v5679,
              usersNo: v2082
              };
            const cv2031 = v5681;
            const cv2032 = v2362;
            const cv2034 = v5664;
            const cv2035 = v2035;
            
            v2031 = cv2031;
            v2032 = cv2032;
            v2034 = cv2034;
            v2035 = cv2035;
            
            txn2 = txn3;
            continue;}
          else {
            const v5683 = stdlib.safeSub(v5364, v5361);
            await stdlib.mapSet(map0, ctc8, v2360, ctc1, v5683);
            const v5685 = v2031.keepGoing;
            const v5686 = v2031.percent;
            const v5694 = stdlib.safeSub(v2083, v5361);
            const v5695 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v5696 = stdlib.safeAdd(v2081, v5361);
            const v5697 = {
              bal: v5694,
              keepGoing: v5685,
              percent: v5686,
              total_amount_claimed: v5696,
              total_rewards_allcoated: v2084,
              total_users_claim: v5695,
              usersNo: v2082
              };
            const cv2031 = v5697;
            const cv2032 = v2362;
            const cv2034 = v5664;
            const cv2035 = v2035;
            
            v2031 = cv2031;
            v2032 = cv2032;
            v2034 = cv2034;
            v2035 = cv2035;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_177': {
        const v5759 = v2361[1];
        undefined /* setApiDetails */;
        ;
        ;
        await stdlib.mapSet(map4, ctc8, v2360, ctc0, null);
        const v6229 = null;
        await txn3.getOutput('User_optin', 'v6229', ctc0, v6229);
        const v6236 = v2031.keepGoing;
        const v6237 = v2031.percent;
        const v6242 = {
          bal: v2083,
          keepGoing: v6236,
          percent: v6237,
          total_amount_claimed: v2081,
          total_rewards_allcoated: v2084,
          total_users_claim: v2080,
          usersNo: v2082
          };
        const cv2031 = v6242;
        const cv2032 = v2362;
        const cv2034 = v2034;
        const cv2035 = v2035;
        
        v2031 = cv2031;
        v2032 = cv2032;
        v2034 = cv2034;
        v2035 = cv2035;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v6274 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
  const v6275 = v6274[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
  ;
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc19,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc20,
    User_claim0_177: ctc15,
    User_optin0_177: ctc19
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc8]);
  
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2188 = ctc.selfAddress();
  const v2190 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to "runUser_claim0_177" (defined at: ./token.rsh:266:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2191 = v2190[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2195 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2188, ctc1), null);
  const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./token.rsh:267:56:decimal', stdlib.UInt_max, '0'));
  const v2199 = stdlib.le(v2191, v2086);
  stdlib.assert(v2199, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to "runUser_claim0_177" (defined at: ./token.rsh:266:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v2201 = stdlib.ge(v2196, v2191);
  stdlib.assert(v2201, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to "runUser_claim0_177" (defined at: ./token.rsh:266:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v2210 = ['User_claim0_177', v2190];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2210],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:271:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:271:14:decimal', stdlib.UInt_max, '0'), v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5361 = v5274[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '0')];
          const v5363 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2360, ctc1), null);
          const v5364 = stdlib.fromSome(v5363, stdlib.checkedBigNumberify('./token.rsh:267:56:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          const v5615 = v5274[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '1')];
          const v5630 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v2360, ctc0), null);
          const v5631 = {
            None: 0,
            Some: 1
            }[v5630[0]];
          const v5632 = stdlib.eq(v5631, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v5633 = [v2360, v5615];
          const v5634 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v5633, ctc3), null);
          const v5635 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5636 = stdlib.fromSome(v5634, v5635);
          const v5638 = v5636.claimed;
          const v5639 = v5636.rewards;
          const v5641 = stdlib.safeAdd(v5638, v5361);
          const v5643 = stdlib.safeSub(v5639, v5361);
          const v5644 = {
            claimed: v5641,
            rewards: v5643
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v5633, ctc3, v5644);
          const v5645 = true;
          const v5646 = await txn1.getOutput('User_claim', 'v5645', ctc9, v5645);
          
          const v5653 = {
            addr: v2360,
            amount: v5361,
            projectName: v2018
            };
          null;
          if (v5632) {
            const v5704 = stdlib.sub(v2086, v5361);
            const v5706 = stdlib.Array_set(v2085, '0', v5704);
            const v5707 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5706);
            sim_r.txns.push({
              kind: 'from',
              to: v2360,
              tok: v2019
              });
            const v5710 = stdlib.eq(v5364, stdlib.checkedBigNumberify('./token.rsh:295:23:decimal', stdlib.UInt_max, '0'));
            if (v5710) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2360, ctc1, undefined /* Nothing */);
              const v5712 = v2031.keepGoing;
              const v5713 = v2031.percent;
              const v5720 = stdlib.safeAdd(v2082, stdlib.checkedBigNumberify('./token.rsh:302:56:decimal', stdlib.UInt_max, '1'));
              const v5721 = stdlib.safeSub(v2083, v5361);
              const v5722 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
              const v5723 = stdlib.safeAdd(v2081, v5361);
              const v5724 = {
                bal: v5721,
                keepGoing: v5712,
                percent: v5713,
                total_amount_claimed: v5723,
                total_rewards_allcoated: v2084,
                total_users_claim: v5722,
                usersNo: v5720
                };
              const v9988 = v5724;
              const v9990 = v5707;
              const v9991 = v2035;
              const v9992 = v5724.keepGoing;
              if (v9992) {
                const v9993 = v5724.total_users_claim;
                const v9994 = v5724.total_amount_claimed;
                const v9995 = v5724.usersNo;
                const v9996 = v5724.bal;
                const v9997 = v5724.total_rewards_allcoated;
                const v9998 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v9999 = v9998[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v10004 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v10005 = v10004[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: v2019
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2019
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v5726 = stdlib.safeSub(v5364, v5361);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2360, ctc1, v5726);
              const v5728 = v2031.keepGoing;
              const v5729 = v2031.percent;
              const v5736 = stdlib.safeAdd(v2082, stdlib.checkedBigNumberify('./token.rsh:302:56:decimal', stdlib.UInt_max, '1'));
              const v5737 = stdlib.safeSub(v2083, v5361);
              const v5738 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
              const v5739 = stdlib.safeAdd(v2081, v5361);
              const v5740 = {
                bal: v5737,
                keepGoing: v5728,
                percent: v5729,
                total_amount_claimed: v5739,
                total_rewards_allcoated: v2084,
                total_users_claim: v5738,
                usersNo: v5736
                };
              const v10006 = v5740;
              const v10008 = v5707;
              const v10009 = v2035;
              const v10010 = v5740.keepGoing;
              if (v10010) {
                const v10011 = v5740.total_users_claim;
                const v10012 = v5740.total_amount_claimed;
                const v10013 = v5740.usersNo;
                const v10014 = v5740.bal;
                const v10015 = v5740.total_rewards_allcoated;
                const v10016 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v10017 = v10016[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v10022 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v10023 = v10022[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: v2019
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2019
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v2360, ctc0, null);
            const v5661 = stdlib.sub(v2086, v5361);
            const v5663 = stdlib.Array_set(v2085, '0', v5661);
            const v5664 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5663);
            sim_r.txns.push({
              kind: 'from',
              to: v2360,
              tok: v2019
              });
            const v5667 = stdlib.eq(v5364, stdlib.checkedBigNumberify('./token.rsh:295:23:decimal', stdlib.UInt_max, '0'));
            if (v5667) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2360, ctc1, undefined /* Nothing */);
              const v5669 = v2031.keepGoing;
              const v5670 = v2031.percent;
              const v5678 = stdlib.safeSub(v2083, v5361);
              const v5679 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
              const v5680 = stdlib.safeAdd(v2081, v5361);
              const v5681 = {
                bal: v5678,
                keepGoing: v5669,
                percent: v5670,
                total_amount_claimed: v5680,
                total_rewards_allcoated: v2084,
                total_users_claim: v5679,
                usersNo: v2082
                };
              const v10024 = v5681;
              const v10026 = v5664;
              const v10027 = v2035;
              const v10028 = v5681.keepGoing;
              if (v10028) {
                const v10029 = v5681.total_users_claim;
                const v10030 = v5681.total_amount_claimed;
                const v10031 = v5681.usersNo;
                const v10032 = v5681.bal;
                const v10033 = v5681.total_rewards_allcoated;
                const v10034 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v10035 = v10034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v10040 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v10041 = v10040[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: v2019
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2019
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v5683 = stdlib.safeSub(v5364, v5361);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2360, ctc1, v5683);
              const v5685 = v2031.keepGoing;
              const v5686 = v2031.percent;
              const v5694 = stdlib.safeSub(v2083, v5361);
              const v5695 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
              const v5696 = stdlib.safeAdd(v2081, v5361);
              const v5697 = {
                bal: v5694,
                keepGoing: v5685,
                percent: v5686,
                total_amount_claimed: v5696,
                total_rewards_allcoated: v2084,
                total_users_claim: v5695,
                usersNo: v2082
                };
              const v10042 = v5697;
              const v10044 = v5664;
              const v10045 = v2035;
              const v10046 = v5697.keepGoing;
              if (v10046) {
                const v10047 = v5697.total_users_claim;
                const v10048 = v5697.total_amount_claimed;
                const v10049 = v5697.usersNo;
                const v10050 = v5697.bal;
                const v10051 = v5697.total_rewards_allcoated;
                const v10052 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v10053 = v10052[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v10058 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                const v10059 = v10058[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2017,
                  tok: v2019
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2019
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      undefined /* setApiDetails */;
      const v5361 = v5274[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '0')];
      const v5363 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2360, ctc1), null);
      const v5364 = stdlib.fromSome(v5363, stdlib.checkedBigNumberify('./token.rsh:267:56:decimal', stdlib.UInt_max, '0'));
      const v5367 = stdlib.le(v5361, v2086);
      stdlib.assert(v5367, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5369 = stdlib.ge(v5364, v5361);
      stdlib.assert(v5369, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:266:38:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:266:38:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)', 'at ./token.rsh:92:14:application call to [unknown function] (defined at: ./token.rsh:92:14:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      ;
      const v5615 = v5274[stdlib.checkedBigNumberify('./token.rsh:266:10:spread', stdlib.UInt_max, '1')];
      const v5630 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v2360, ctc0), null);
      const v5631 = {
        None: 0,
        Some: 1
        }[v5630[0]];
      const v5632 = stdlib.eq(v5631, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5633 = [v2360, v5615];
      const v5634 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v5633, ctc3), null);
      const v5635 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5636 = stdlib.fromSome(v5634, v5635);
      const v5638 = v5636.claimed;
      const v5639 = v5636.rewards;
      const v5641 = stdlib.safeAdd(v5638, v5361);
      const v5643 = stdlib.safeSub(v5639, v5361);
      const v5644 = {
        claimed: v5641,
        rewards: v5643
        };
      await stdlib.mapSet(map1, ctc22, v5633, ctc3, v5644);
      const v5645 = true;
      const v5646 = await txn1.getOutput('User_claim', 'v5645', ctc9, v5645);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v5274, v5646), {
          at: './token.rsh:266:11:application',
          fs: ['at ./token.rsh:266:11:application call to [unknown function] (defined at: ./token.rsh:266:11:function exp)', 'at ./token.rsh:285:14:application call to "ret" (defined at: ./token.rsh:272:15:function exp)', 'at ./token.rsh:272:15:application call to [unknown function] (defined at: ./token.rsh:272:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v5653 = {
        addr: v2360,
        amount: v5361,
        projectName: v2018
        };
      null;
      if (v5632) {
        const v5704 = stdlib.sub(v2086, v5361);
        const v5706 = stdlib.Array_set(v2085, '0', v5704);
        const v5707 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5706);
        ;
        const v5710 = stdlib.eq(v5364, stdlib.checkedBigNumberify('./token.rsh:295:23:decimal', stdlib.UInt_max, '0'));
        if (v5710) {
          await stdlib.mapSet(map0, ctc6, v2360, ctc1, undefined /* Nothing */);
          const v5712 = v2031.keepGoing;
          const v5713 = v2031.percent;
          const v5720 = stdlib.safeAdd(v2082, stdlib.checkedBigNumberify('./token.rsh:302:56:decimal', stdlib.UInt_max, '1'));
          const v5721 = stdlib.safeSub(v2083, v5361);
          const v5722 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
          const v5723 = stdlib.safeAdd(v2081, v5361);
          const v5724 = {
            bal: v5721,
            keepGoing: v5712,
            percent: v5713,
            total_amount_claimed: v5723,
            total_rewards_allcoated: v2084,
            total_users_claim: v5722,
            usersNo: v5720
            };
          const v9988 = v5724;
          const v9990 = v5707;
          const v9991 = v2035;
          const v9992 = v5724.keepGoing;
          if (v9992) {
            const v9993 = v5724.total_users_claim;
            const v9994 = v5724.total_amount_claimed;
            const v9995 = v5724.usersNo;
            const v9996 = v5724.bal;
            const v9997 = v5724.total_rewards_allcoated;
            const v9998 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v9999 = v9998[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v10004 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10005 = v10004[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v5726 = stdlib.safeSub(v5364, v5361);
          await stdlib.mapSet(map0, ctc6, v2360, ctc1, v5726);
          const v5728 = v2031.keepGoing;
          const v5729 = v2031.percent;
          const v5736 = stdlib.safeAdd(v2082, stdlib.checkedBigNumberify('./token.rsh:302:56:decimal', stdlib.UInt_max, '1'));
          const v5737 = stdlib.safeSub(v2083, v5361);
          const v5738 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
          const v5739 = stdlib.safeAdd(v2081, v5361);
          const v5740 = {
            bal: v5737,
            keepGoing: v5728,
            percent: v5729,
            total_amount_claimed: v5739,
            total_rewards_allcoated: v2084,
            total_users_claim: v5738,
            usersNo: v5736
            };
          const v10006 = v5740;
          const v10008 = v5707;
          const v10009 = v2035;
          const v10010 = v5740.keepGoing;
          if (v10010) {
            const v10011 = v5740.total_users_claim;
            const v10012 = v5740.total_amount_claimed;
            const v10013 = v5740.usersNo;
            const v10014 = v5740.bal;
            const v10015 = v5740.total_rewards_allcoated;
            const v10016 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10017 = v10016[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v10022 = v5707[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10023 = v10022[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map3, ctc6, v2360, ctc0, null);
        const v5661 = stdlib.sub(v2086, v5361);
        const v5663 = stdlib.Array_set(v2085, '0', v5661);
        const v5664 = stdlib.Array_set(v2034, stdlib.checkedBigNumberify('./token.rsh:293:32:application', stdlib.UInt_max, '0'), v5663);
        ;
        const v5667 = stdlib.eq(v5364, stdlib.checkedBigNumberify('./token.rsh:295:23:decimal', stdlib.UInt_max, '0'));
        if (v5667) {
          await stdlib.mapSet(map0, ctc6, v2360, ctc1, undefined /* Nothing */);
          const v5669 = v2031.keepGoing;
          const v5670 = v2031.percent;
          const v5678 = stdlib.safeSub(v2083, v5361);
          const v5679 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
          const v5680 = stdlib.safeAdd(v2081, v5361);
          const v5681 = {
            bal: v5678,
            keepGoing: v5669,
            percent: v5670,
            total_amount_claimed: v5680,
            total_rewards_allcoated: v2084,
            total_users_claim: v5679,
            usersNo: v2082
            };
          const v10024 = v5681;
          const v10026 = v5664;
          const v10027 = v2035;
          const v10028 = v5681.keepGoing;
          if (v10028) {
            const v10029 = v5681.total_users_claim;
            const v10030 = v5681.total_amount_claimed;
            const v10031 = v5681.usersNo;
            const v10032 = v5681.bal;
            const v10033 = v5681.total_rewards_allcoated;
            const v10034 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10035 = v10034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v10040 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10041 = v10040[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v5683 = stdlib.safeSub(v5364, v5361);
          await stdlib.mapSet(map0, ctc6, v2360, ctc1, v5683);
          const v5685 = v2031.keepGoing;
          const v5686 = v2031.percent;
          const v5694 = stdlib.safeSub(v2083, v5361);
          const v5695 = stdlib.safeAdd(v2080, stdlib.checkedBigNumberify('./token.rsh:304:52:decimal', stdlib.UInt_max, '1'));
          const v5696 = stdlib.safeAdd(v2081, v5361);
          const v5697 = {
            bal: v5694,
            keepGoing: v5685,
            percent: v5686,
            total_amount_claimed: v5696,
            total_rewards_allcoated: v2084,
            total_users_claim: v5695,
            usersNo: v2082
            };
          const v10042 = v5697;
          const v10044 = v5664;
          const v10045 = v2035;
          const v10046 = v5697.keepGoing;
          if (v10046) {
            const v10047 = v5697.total_users_claim;
            const v10048 = v5697.total_amount_claimed;
            const v10049 = v5697.usersNo;
            const v10050 = v5697.bal;
            const v10051 = v5697.total_rewards_allcoated;
            const v10052 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10053 = v10052[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v10058 = v5664[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10059 = v10058[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
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
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_177: ctc16,
    Admin_deposit0_177: ctc17,
    Admin_editUserReward0_177: ctc18,
    Admin_endContractAndTransfer0_177: ctc15,
    Admin_revokeAdmin0_177: ctc16,
    Admin_setReward0_177: ctc19,
    User_claim0_177: ctc20,
    User_optin0_177: ctc15
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
  
  
  const [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2214 = stdlib.protect(ctc15, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:313:26:application call to [unknown function] (defined at: ./token.rsh:313:26:function exp)', 'at ./token.rsh:81:37:application call to "runUser_optin0_177" (defined at: ./token.rsh:313:10:function exp)', 'at ./token.rsh:81:37:application call to [unknown function] (defined at: ./token.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2218 = ['User_optin0_177', v2214];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2017, v2018, v2019, v2031, v2034, v2035, v2080, v2081, v2082, v2083, v2084, v2085, v2086, v2218],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token.rsh:315:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:315:14:decimal', stdlib.UInt_max, '0'), v2019]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
      
      switch (v2361[0]) {
        case 'Admin_addAdmin0_177': {
          const v2364 = v2361[1];
          
          break;
          }
        case 'Admin_deposit0_177': {
          const v2849 = v2361[1];
          
          break;
          }
        case 'Admin_editUserReward0_177': {
          const v3334 = v2361[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_177': {
          const v3819 = v2361[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_177': {
          const v4304 = v2361[1];
          
          break;
          }
        case 'Admin_setReward0_177': {
          const v4789 = v2361[1];
          
          break;
          }
        case 'User_claim0_177': {
          const v5274 = v2361[1];
          
          break;
          }
        case 'User_optin0_177': {
          const v5759 = v2361[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v2360, ctc0, null);
          const v6229 = null;
          const v6230 = await txn1.getOutput('User_optin', 'v6229', ctc0, v6229);
          
          const v6236 = v2031.keepGoing;
          const v6237 = v2031.percent;
          const v6242 = {
            bal: v2083,
            keepGoing: v6236,
            percent: v6237,
            total_amount_claimed: v2081,
            total_rewards_allcoated: v2084,
            total_users_claim: v2080,
            usersNo: v2082
            };
          const v10258 = v6242;
          const v10260 = v2034;
          const v10261 = v2035;
          const v10262 = v6242.keepGoing;
          if (v10262) {
            const v10263 = v6242.total_users_claim;
            const v10264 = v6242.total_amount_claimed;
            const v10265 = v6242.usersNo;
            const v10266 = v6242.bal;
            const v10267 = v6242.total_rewards_allcoated;
            const v10268 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10269 = v10268[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10274 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            const v10275 = v10274[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2017,
              tok: v2019
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2019
              })
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
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2361], secs: v2363, time: v2362, didSend: v1310, from: v2360 } = txn1;
  switch (v2361[0]) {
    case 'Admin_addAdmin0_177': {
      const v2364 = v2361[1];
      return;
      break;
      }
    case 'Admin_deposit0_177': {
      const v2849 = v2361[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_177': {
      const v3334 = v2361[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_177': {
      const v3819 = v2361[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_177': {
      const v4304 = v2361[1];
      return;
      break;
      }
    case 'Admin_setReward0_177': {
      const v4789 = v2361[1];
      return;
      break;
      }
    case 'User_claim0_177': {
      const v5274 = v2361[1];
      return;
      break;
      }
    case 'User_optin0_177': {
      const v5759 = v2361[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map4, ctc6, v2360, ctc0, null);
      const v6229 = null;
      const v6230 = await txn1.getOutput('User_optin', 'v6229', ctc0, v6229);
      if (v1310) {
        stdlib.protect(ctc0, await interact.out(v5759, v6230), {
          at: './token.rsh:313:11:application',
          fs: ['at ./token.rsh:313:11:application call to [unknown function] (defined at: ./token.rsh:313:11:function exp)', 'at ./token.rsh:318:14:application call to "ret" (defined at: ./token.rsh:316:15:function exp)', 'at ./token.rsh:316:15:application call to [unknown function] (defined at: ./token.rsh:316:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6236 = v2031.keepGoing;
      const v6237 = v2031.percent;
      const v6242 = {
        bal: v2083,
        keepGoing: v6236,
        percent: v6237,
        total_amount_claimed: v2081,
        total_rewards_allcoated: v2084,
        total_users_claim: v2080,
        usersNo: v2082
        };
      const v10258 = v6242;
      const v10260 = v2034;
      const v10261 = v2035;
      const v10262 = v6242.keepGoing;
      if (v10262) {
        const v10263 = v6242.total_users_claim;
        const v10264 = v6242.total_amount_claimed;
        const v10265 = v6242.usersNo;
        const v10266 = v6242.bal;
        const v10267 = v6242.total_rewards_allcoated;
        const v10268 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v10269 = v10268[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10274 = v2034[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        const v10275 = v10274[stdlib.checkedBigNumberify('./token.rsh:119:31:application', stdlib.UInt_max, '0')];
        ;
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
    impure: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64))void`, `_reachp_2((uint64,(byte,byte[48])))void`],
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64))void`, `_reachp_2((uint64,(byte,byte[48])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAEIAxDUkwHUeijUxQGgjQYEJgYAAQABAQECAQQBAzEYQQhiKGRJIls1ASRbNQIpZCpkUIIUBAJfdMcEDbOGvAQTblc7BBp3QuUEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEgk+QIEbuR2FAR4Stk3BHr+yG0Ex8Kc1QTeVwRkBO1G26YE8yd4BAT5b2zgBPlzDgsE+q7IsDYaAI4UAFQCLAF3B6QBBgJOAZsB/AE3AasAiQHLAbsBRwe0AN8AyQHbAGsAAQA2GgE1CySvKTQLUCEEr1BQNQslNAESRIgJfDQLIls1DDQLVwgxNQ2ABFULZYM0DBZQNA1QsDQMiAnlNA0iVY0ICPoI/QkAB44HkQeUB54HqEL/rDYaARc1CySvKjQLFlAhB69QUDULQv+oNhoBNhoCFzULNQwkrys0DDQLFlBQJK9QUDULQv+KgDkAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/SjYaATULJK8nBDQLUCEEr1BQNQtC/zQ2GgE2GgIXNhoDFzULNQw1DSSvgAEFNA00DBZQNAsWUFBQNQtC/w02GgE1CzQBJRJEiAiEKCgrNAtQiAhwIlUjEhZRBwg1BDEZIhJEgAQVH3x1NARQsCNDNAElEkSICFg0DhY1BEL/3zYaATYaAhc1CzUMNAElEkSICD0hBK8oIQSvKjQMNAsWUFCICCCICItXAAg1BEL/rzYaATULNAElEkSICBMoKCcENAtQiAf+IlUjEhZRBwg1BEL/izQBJRJEiAf0NBAWNQRC/3s0ASUSRIgH5DQTFjUEQv9rNAElEkSIB9Q0FBY1BEL/WzQBJRJEiAfENBIWNQRC/0s2GgE1CzQBJRJEiAevJK8oJK8pNAtQiAeYiAgDNQRC/yo2GgE2GgIXNQs1DDQBJRJEiAeIIQSvKCEEryo0DDQLFlBQiAdriAfWVwgINQRC/vo2GgEXNhoCFzULNQwkr4ABBjQMFjQLFlBQMgNQUDULQv3FgDkAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L9hTEANBsSKCgrMQBQiAbwIlUjEhFEIQYrNA1XASBQKIgHPSg1C4AIAAAAAAAACcM0C1CwNAs1BDQRFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjUXNRg0GFcIARdBBf80GIEqWzUUNBiBGls1EzQYgTJbNRI0GCJbNRE0GIEiWzUQNBZXABFJNQ8iWzUONBs0GlA0GRZQNBhQNBZQNBUWUDQUFlA0ExZQNBIWUDQRFlA0EBZQNA9QNA4WUCUyBjUCNQEpSwFXAH9nKkxXf1tnKDQBFjQCFlBnMRkiEkSIBrc0A0D9vUL9sDQNI1s1CzEANBsSKCgrMQBQiAX9IlUjEhFENAs0GYgGmig1DIAIAAAAAAAAC8E0DFCwNAw1BDQRNAsIFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjQWNA80DjQLCBZcAFwANRY1FzUYQv79NAuBIFs1DDEANBsSKCgrMQBQiAWLIlUjEhFENAw0Dg5EIQUpNAtXACBQNAwWiAXQKDULgAgAAAAAAAANxjQLULA0CzUENBEWNBhXCAFQNBhXCRFQNBMWUDQQFlA0FBZQNBIWUDIGNRc1GEL+kDQbMQASRCg1C4AIAAAAAAAAD780C1CwNAs1BDQRFilQNBhXCRFQNBMWUDQQFlA0FBZQNBIWUDIGNRc1GEL+UTEANBsSRCEGKzQNVwEgUIgFZyg1C4AIAAAAAAAAEbk0C1CwNAs1BDQRFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjUXNRhC/gI0C1cAIDUeNAshB1tJNR00EQ01HCgoJwQ0HlCIBIciVSMSRCI0HTQcTUk1DTQZiAUeNB40C1cgCFA1DCEEryghBK8qNAxQiARciATHNQshCCo0DFA0C1cACDQLJFs0HQgWUIgEoCEFKTQeUCSvKCSvKTQeUIgELogEmRc0HQgWiASDIzULgAgAAAAAAAATyjQLFlEHCFCwNAsWUQcINQQ0HEECcTQRNB0INQs0CxY0GFcIAVA0GFcJEVA0ExZQNBAWUDQUFlA0EhZQMgY0FjQPNA40DQgWXABcADUWNRc1GEL9HzQLIls1HCSvKCSvKTEAUIgDsIgEGxc1DTQcNA4ORDQNNBwPRDEANAtXCAhQNQwhBK8oIQSvKjQMUIgDhogD8TULIQgqNAxQNAsiWzQcCBY0CyRbNBwJFlCIA8cjNQuACAAAAAAAABYNNAsWUQcIULA0CxZRBwg1BDEANBwWUDQaUDULgASbyFRQNAtQsCgoJwUxAFCIAysiVSMSQQGbNBY0DzQONBwJFlwAXAA1CzQcNBkxAIgDgjQNQAHjIQUpMQBQiAOCNBE0HAkWNBhXCAFQNBhXCRFQNBM0HAgWUDQQFlA0FCMIFlA0EiMIFlAyBjQLNRY1FzUYQvwkIQYnBDEAUCiIAxwoNQuACAAAAAAAABhVNAtQsDQLNQQ0ERY0GFcIAVA0GFcJEVA0ExZQNBAWUDQUFlA0EhZQMgY1FzUYQvvcMQA1GzQLIls1DDQLVwgeNRo0C4EmWzUZgAQoS8fwNAwWUDQaUDQZFlCwNAyIAuSBEa81CyEJiALFIjQZMgqIArWAOgAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAGQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyBjQLSVcAESSvXABcACI1FTUWNRc1GEL7RYgCdSEJiAJfNhoBNQtC/1mIAmU2GgE1C0L4VCIxNBJEJTE1EkQiMTYSRCIxNxJEiAJGgdoBryIiQvtyQvx3QvyzNA1XATA1C0L8+DQNVwEQNQtC/dFC/sk0ETULQv2PIQYnBTEAUCiIAd40FjQPNA40HAkWXABcADULNBw0GTEAiAHcNA1AAIIhBSkxAFCIAdw0ETQcCRY0GFcIAVA0GFcJEVA0EzQcCBZQNBAWUDQUIwgWUDQSFlAyBjQLNRY1FzUYQvqAIQUpMQBQNA00HAkWiAF0NBE0HAkWNBhXCAFQNBhXCRFQNBM0HAgWUDQQFlA0FCMIFlA0EiMIFlAyBjQLNRY1FzUYQvo7IQUpMQBQNA00HAkWiAEvNBE0HAkWNBhXCAFQNBhXCRFQNBM0HAgWUDQQFlA0FCMIFlA0EhZQMgY0CzUWNRc1GEL5+DQVNBuIAQ80FlcAESJbNBk0G4gA/SI0GTIKMgmIAUkxGYEFEkSIAREyCmAyCngJSTUGMgqIAN9C+khITL9IiSKyASOyELIHsgiziSKyASEKshCyFLIRshKziUL5QEL6KjQNVwEoNQtC+pFIiUwJSTUGMgmIAKCJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJvkkWUQcIRQRNUIlJVwAgNRtJVyAeNRpJgT5bNRlJV0Y6NRhJV4ARNRZJgZEBWzUVSYGZAVs1FEmBoQFbNRNJgakBWzUSSYGxAVs1EUmBuQFbNRBJV8ERNQ+B0gFbNQ6JTEm9QP85SwOIABRC/zFJVwEATCJVTYmxQv81sUL/JTQGCDUGibwiTgJNNAcINQeJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/ypC/zIxFjQAIwhJNQAJRwM4FDIKEkQ4ECEKEkQ4EU8CEkQ4EhJEibGyFUL+3Q==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `487`,
    1001: `487`,
    1002: `489`,
    1003: `489`,
    1004: `490`,
    1005: `490`,
    1006: `491`,
    1007: `492`,
    1008: `492`,
    1009: `493`,
    101: `21`,
    1010: `494`,
    1011: `495`,
    1012: `495`,
    1013: `496`,
    1014: `497`,
    1015: `497`,
    1016: `498`,
    1017: `499`,
    1018: `499`,
    1019: `500`,
    102: `21`,
    1020: `501`,
    1021: `502`,
    1022: `502`,
    1023: `503`,
    1024: `504`,
    1025: `505`,
    1026: `505`,
    1027: `506`,
    1028: `507`,
    1029: `508`,
    103: `21`,
    1030: `508`,
    1031: `509`,
    1032: `510`,
    1033: `511`,
    1034: `511`,
    1035: `512`,
    1036: `513`,
    1037: `514`,
    1038: `514`,
    1039: `515`,
    104: `21`,
    1040: `516`,
    1041: `517`,
    1042: `517`,
    1043: `518`,
    1044: `519`,
    1045: `519`,
    1046: `520`,
    1047: `521`,
    1048: `522`,
    1049: `523`,
    105: `21`,
    1050: `523`,
    1051: `525`,
    1052: `525`,
    1053: `526`,
    1054: `526`,
    1055: `527`,
    1056: `528`,
    1057: `528`,
    1058: `529`,
    1059: `529`,
    106: `21`,
    1060: `529`,
    1061: `530`,
    1062: `531`,
    1063: `532`,
    1064: `533`,
    1065: `533`,
    1066: `533`,
    1067: `534`,
    1068: `535`,
    1069: `536`,
    107: `21`,
    1070: `536`,
    1071: `537`,
    1072: `538`,
    1073: `538`,
    1074: `539`,
    1075: `540`,
    1076: `541`,
    1077: `542`,
    1078: `542`,
    1079: `543`,
    108: `21`,
    1080: `544`,
    1081: `545`,
    1082: `547`,
    1083: `547`,
    1084: `547`,
    1085: `549`,
    1086: `549`,
    1087: `550`,
    1088: `550`,
    1089: `550`,
    109: `21`,
    1090: `551`,
    1091: `551`,
    1092: `551`,
    1093: `553`,
    1094: `553`,
    1095: `554`,
    1096: `555`,
    1097: `556`,
    1098: `556`,
    1099: `557`,
    11: `2`,
    110: `21`,
    1100: `557`,
    1101: `558`,
    1102: `558`,
    1103: `559`,
    1104: `561`,
    1105: `562`,
    1106: `563`,
    1107: `564`,
    1108: `564`,
    1109: `565`,
    111: `21`,
    1110: `566`,
    1111: `566`,
    1112: `566`,
    1113: `567`,
    1114: `568`,
    1115: `569`,
    1116: `570`,
    1117: `571`,
    1118: `572`,
    1119: `580`,
    112: `21`,
    1120: `580`,
    1121: `581`,
    1122: `581`,
    1123: `582`,
    1124: `582`,
    1125: `582`,
    1126: `585`,
    1127: `586`,
    1128: `586`,
    1129: `587`,
    113: `21`,
    1130: `587`,
    1131: `587`,
    1132: `587`,
    1133: `587`,
    1134: `587`,
    1135: `587`,
    1136: `587`,
    1137: `587`,
    1138: `587`,
    1139: `588`,
    114: `21`,
    1140: `588`,
    1141: `589`,
    1142: `590`,
    1143: `591`,
    1144: `591`,
    1145: `592`,
    1146: `592`,
    1147: `593`,
    1148: `593`,
    1149: `594`,
    115: `21`,
    1150: `594`,
    1151: `595`,
    1152: `596`,
    1153: `597`,
    1154: `597`,
    1155: `598`,
    1156: `598`,
    1157: `598`,
    1158: `599`,
    1159: `600`,
    116: `21`,
    1160: `600`,
    1161: `601`,
    1162: `601`,
    1163: `601`,
    1164: `602`,
    1165: `603`,
    1166: `603`,
    1167: `604`,
    1168: `605`,
    1169: `606`,
    117: `21`,
    1170: `606`,
    1171: `607`,
    1172: `608`,
    1173: `609`,
    1174: `609`,
    1175: `610`,
    1176: `611`,
    1177: `612`,
    1178: `612`,
    1179: `613`,
    118: `21`,
    1180: `614`,
    1181: `615`,
    1182: `615`,
    1183: `616`,
    1184: `616`,
    1185: `617`,
    1186: `617`,
    1187: `618`,
    1188: `618`,
    1189: `619`,
    119: `21`,
    1190: `619`,
    1191: `620`,
    1192: `621`,
    1193: `622`,
    1194: `622`,
    1195: `623`,
    1196: `623`,
    1197: `624`,
    1198: `624`,
    1199: `625`,
    12: `2`,
    120: `21`,
    1200: `625`,
    1201: `626`,
    1202: `626`,
    1203: `627`,
    1204: `627`,
    1205: `627`,
    1206: `629`,
    1207: `629`,
    1208: `630`,
    1209: `630`,
    121: `21`,
    1210: `631`,
    1211: `632`,
    1212: `632`,
    1213: `633`,
    1214: `633`,
    1215: `634`,
    1216: `634`,
    1217: `635`,
    1218: `637`,
    1219: `638`,
    122: `21`,
    1220: `639`,
    1221: `640`,
    1222: `640`,
    1223: `641`,
    1224: `642`,
    1225: `642`,
    1226: `642`,
    1227: `643`,
    1228: `644`,
    1229: `645`,
    123: `21`,
    1230: `646`,
    1231: `647`,
    1232: `648`,
    1233: `656`,
    1234: `656`,
    1235: `657`,
    1236: `657`,
    1237: `658`,
    1238: `659`,
    1239: `668`,
    124: `21`,
    1240: `668`,
    1241: `669`,
    1242: `670`,
    1243: `670`,
    1244: `671`,
    1245: `671`,
    1246: `671`,
    1247: `672`,
    1248: `673`,
    1249: `673`,
    125: `21`,
    1250: `674`,
    1251: `675`,
    1252: `675`,
    1253: `675`,
    1254: `676`,
    1255: `677`,
    1256: `677`,
    1257: `678`,
    1258: `678`,
    1259: `678`,
    126: `21`,
    1260: `678`,
    1261: `678`,
    1262: `678`,
    1263: `678`,
    1264: `678`,
    1265: `678`,
    1266: `678`,
    1267: `679`,
    1268: `679`,
    1269: `680`,
    127: `21`,
    1270: `681`,
    1271: `682`,
    1272: `682`,
    1273: `683`,
    1274: `683`,
    1275: `684`,
    1276: `684`,
    1277: `685`,
    1278: `686`,
    1279: `686`,
    128: `21`,
    1280: `687`,
    1281: `687`,
    1282: `687`,
    1283: `688`,
    1284: `689`,
    1285: `689`,
    1286: `690`,
    1287: `690`,
    1288: `690`,
    1289: `691`,
    129: `21`,
    1290: `692`,
    1291: `692`,
    1292: `693`,
    1293: `694`,
    1294: `695`,
    1295: `695`,
    1296: `696`,
    1297: `697`,
    1298: `698`,
    1299: `698`,
    13: `2`,
    130: `21`,
    1300: `699`,
    1301: `700`,
    1302: `701`,
    1303: `701`,
    1304: `702`,
    1305: `703`,
    1306: `704`,
    1307: `704`,
    1308: `705`,
    1309: `705`,
    131: `21`,
    1310: `706`,
    1311: `706`,
    1312: `707`,
    1313: `707`,
    1314: `707`,
    1315: `709`,
    1316: `709`,
    1317: `710`,
    1318: `710`,
    1319: `711`,
    132: `21`,
    1320: `712`,
    1321: `720`,
    1322: `721`,
    1323: `721`,
    1324: `722`,
    1325: `722`,
    1326: `722`,
    1327: `722`,
    1328: `722`,
    1329: `722`,
    133: `21`,
    1330: `722`,
    1331: `722`,
    1332: `722`,
    1333: `722`,
    1334: `723`,
    1335: `723`,
    1336: `724`,
    1337: `725`,
    1338: `726`,
    1339: `726`,
    134: `21`,
    1340: `727`,
    1341: `727`,
    1342: `728`,
    1343: `728`,
    1344: `729`,
    1345: `730`,
    1346: `731`,
    1347: `732`,
    1348: `732`,
    1349: `733`,
    135: `21`,
    1350: `733`,
    1351: `733`,
    1352: `734`,
    1353: `735`,
    1354: `735`,
    1355: `736`,
    1356: `737`,
    1357: `738`,
    1358: `738`,
    1359: `739`,
    136: `21`,
    1360: `740`,
    1361: `741`,
    1362: `741`,
    1363: `742`,
    1364: `743`,
    1365: `744`,
    1366: `744`,
    1367: `745`,
    1368: `746`,
    1369: `747`,
    137: `21`,
    1370: `747`,
    1371: `748`,
    1372: `748`,
    1373: `749`,
    1374: `749`,
    1375: `750`,
    1376: `750`,
    1377: `750`,
    1378: `752`,
    1379: `752`,
    138: `21`,
    1380: `753`,
    1381: `753`,
    1382: `754`,
    1383: `755`,
    1384: `764`,
    1385: `764`,
    1386: `765`,
    1387: `766`,
    1388: `766`,
    1389: `767`,
    139: `21`,
    1390: `767`,
    1391: `767`,
    1392: `768`,
    1393: `769`,
    1394: `769`,
    1395: `769`,
    1396: `770`,
    1397: `771`,
    1398: `771`,
    1399: `772`,
    14: `2`,
    140: `21`,
    1400: `772`,
    1401: `772`,
    1402: `772`,
    1403: `772`,
    1404: `772`,
    1405: `772`,
    1406: `772`,
    1407: `772`,
    1408: `772`,
    1409: `773`,
    141: `21`,
    1410: `773`,
    1411: `774`,
    1412: `775`,
    1413: `776`,
    1414: `776`,
    1415: `777`,
    1416: `777`,
    1417: `778`,
    1418: `778`,
    1419: `779`,
    142: `21`,
    1420: `780`,
    1421: `780`,
    1422: `781`,
    1423: `781`,
    1424: `781`,
    1425: `782`,
    1426: `783`,
    1427: `783`,
    1428: `784`,
    1429: `784`,
    143: `21`,
    1430: `784`,
    1431: `785`,
    1432: `786`,
    1433: `786`,
    1434: `787`,
    1435: `788`,
    1436: `789`,
    1437: `789`,
    1438: `790`,
    1439: `791`,
    144: `21`,
    1440: `792`,
    1441: `792`,
    1442: `793`,
    1443: `794`,
    1444: `795`,
    1445: `795`,
    1446: `796`,
    1447: `797`,
    1448: `798`,
    1449: `798`,
    145: `21`,
    1450: `799`,
    1451: `799`,
    1452: `800`,
    1453: `800`,
    1454: `801`,
    1455: `801`,
    1456: `801`,
    1457: `803`,
    1458: `803`,
    1459: `804`,
    146: `21`,
    1460: `804`,
    1461: `804`,
    1462: `805`,
    1463: `805`,
    1464: `806`,
    1465: `806`,
    1466: `807`,
    1467: `807`,
    1468: `808`,
    1469: `809`,
    147: `21`,
    1470: `810`,
    1471: `810`,
    1472: `811`,
    1473: `811`,
    1474: `812`,
    1475: `813`,
    1476: `813`,
    1477: `815`,
    1478: `816`,
    1479: `817`,
    148: `21`,
    1480: `817`,
    1481: `818`,
    1482: `818`,
    1483: `819`,
    1484: `820`,
    1485: `820`,
    1486: `820`,
    1487: `821`,
    1488: `822`,
    1489: `823`,
    149: `21`,
    1490: `824`,
    1491: `825`,
    1492: `833`,
    1493: `834`,
    1494: `834`,
    1495: `835`,
    1496: `835`,
    1497: `836`,
    1498: `837`,
    1499: `838`,
    15: `2`,
    150: `21`,
    1500: `838`,
    1501: `839`,
    1502: `839`,
    1503: `840`,
    1504: `840`,
    1505: `840`,
    1506: `843`,
    1507: `843`,
    1508: `844`,
    1509: `844`,
    151: `21`,
    1510: `845`,
    1511: `845`,
    1512: `845`,
    1513: `846`,
    1514: `847`,
    1515: `847`,
    1516: `848`,
    1517: `848`,
    1518: `849`,
    1519: `851`,
    152: `21`,
    1520: `852`,
    1521: `852`,
    1522: `853`,
    1523: `854`,
    1524: `855`,
    1525: `855`,
    1526: `856`,
    1527: `857`,
    1528: `857`,
    1529: `857`,
    153: `21`,
    1530: `858`,
    1531: `858`,
    1532: `858`,
    1533: `859`,
    1534: `859`,
    1535: `860`,
    1536: `860`,
    1537: `861`,
    1538: `862`,
    1539: `862`,
    154: `21`,
    1540: `863`,
    1541: `864`,
    1542: `864`,
    1543: `865`,
    1544: `865`,
    1545: `865`,
    1546: `866`,
    1547: `866`,
    1548: `867`,
    1549: `868`,
    155: `21`,
    1550: `869`,
    1551: `869`,
    1552: `870`,
    1553: `871`,
    1554: `872`,
    1555: `873`,
    1556: `873`,
    1557: `873`,
    1558: `875`,
    1559: `875`,
    156: `21`,
    1560: `876`,
    1561: `877`,
    1562: `877`,
    1563: `878`,
    1564: `879`,
    1565: `880`,
    1566: `881`,
    1567: `882`,
    1568: `883`,
    1569: `884`,
    157: `22`,
    1570: `885`,
    1571: `885`,
    1572: `886`,
    1573: `887`,
    1574: `887`,
    1575: `887`,
    1576: `888`,
    1577: `888`,
    1578: `888`,
    1579: `889`,
    158: `22`,
    1580: `890`,
    1581: `890`,
    1582: `891`,
    1583: `892`,
    1584: `893`,
    1585: `893`,
    1586: `893`,
    1587: `894`,
    1588: `895`,
    1589: `895`,
    159: `22`,
    1590: `896`,
    1591: `896`,
    1592: `896`,
    1593: `896`,
    1594: `896`,
    1595: `896`,
    1596: `896`,
    1597: `896`,
    1598: `896`,
    1599: `896`,
    16: `2`,
    160: `23`,
    1600: `897`,
    1601: `897`,
    1602: `898`,
    1603: `899`,
    1604: `899`,
    1605: `899`,
    1606: `900`,
    1607: `901`,
    1608: `902`,
    1609: `902`,
    161: `23`,
    1610: `903`,
    1611: `904`,
    1612: `904`,
    1613: `904`,
    1614: `905`,
    1615: `905`,
    1616: `906`,
    1617: `906`,
    1618: `907`,
    1619: `907`,
    162: `23`,
    1620: `907`,
    1621: `908`,
    1622: `908`,
    1623: `909`,
    1624: `909`,
    1625: `910`,
    1626: `911`,
    1627: `911`,
    1628: `913`,
    1629: `913`,
    163: `23`,
    1630: `914`,
    1631: `915`,
    1632: `915`,
    1633: `916`,
    1634: `916`,
    1635: `916`,
    1636: `917`,
    1637: `918`,
    1638: `918`,
    1639: `919`,
    164: `23`,
    1640: `919`,
    1641: `919`,
    1642: `920`,
    1643: `921`,
    1644: `921`,
    1645: `922`,
    1646: `923`,
    1647: `924`,
    1648: `924`,
    1649: `925`,
    165: `23`,
    1650: `926`,
    1651: `927`,
    1652: `927`,
    1653: `928`,
    1654: `929`,
    1655: `930`,
    1656: `930`,
    1657: `931`,
    1658: `932`,
    1659: `933`,
    166: `23`,
    1660: `933`,
    1661: `934`,
    1662: `934`,
    1663: `935`,
    1664: `935`,
    1665: `936`,
    1666: `936`,
    1667: `937`,
    1668: `937`,
    1669: `938`,
    167: `23`,
    1670: `939`,
    1671: `940`,
    1672: `940`,
    1673: `941`,
    1674: `941`,
    1675: `942`,
    1676: `942`,
    1677: `943`,
    1678: `943`,
    1679: `944`,
    168: `23`,
    1680: `944`,
    1681: `945`,
    1682: `945`,
    1683: `945`,
    1684: `947`,
    1685: `947`,
    1686: `948`,
    1687: `949`,
    1688: `950`,
    1689: `950`,
    169: `23`,
    1690: `951`,
    1691: `952`,
    1692: `954`,
    1693: `955`,
    1694: `956`,
    1695: `957`,
    1696: `958`,
    1697: `958`,
    1698: `959`,
    1699: `960`,
    17: `2`,
    170: `23`,
    1700: `960`,
    1701: `960`,
    1702: `961`,
    1703: `961`,
    1704: `961`,
    1705: `962`,
    1706: `963`,
    1707: `963`,
    1708: `964`,
    1709: `964`,
    171: `23`,
    1710: `965`,
    1711: `965`,
    1712: `966`,
    1713: `967`,
    1714: `975`,
    1715: `975`,
    1716: `976`,
    1717: `976`,
    1718: `977`,
    1719: `978`,
    172: `23`,
    1720: `986`,
    1721: `986`,
    1722: `987`,
    1723: `987`,
    1724: `988`,
    1725: `988`,
    1726: `988`,
    1727: `989`,
    1728: `990`,
    1729: `990`,
    173: `23`,
    1730: `991`,
    1731: `991`,
    1732: `992`,
    1733: `994`,
    1734: `995`,
    1735: `995`,
    1736: `996`,
    1737: `997`,
    1738: `998`,
    1739: `998`,
    174: `23`,
    1740: `999`,
    1741: `1000`,
    1742: `1000`,
    1743: `1000`,
    1744: `1001`,
    1745: `1001`,
    1746: `1001`,
    1747: `1002`,
    1748: `1002`,
    1749: `1003`,
    175: `23`,
    1750: `1003`,
    1751: `1004`,
    1752: `1005`,
    1753: `1005`,
    1754: `1006`,
    1755: `1007`,
    1756: `1007`,
    1757: `1008`,
    1758: `1009`,
    1759: `1010`,
    176: `23`,
    1760: `1010`,
    1761: `1011`,
    1762: `1012`,
    1763: `1013`,
    1764: `1013`,
    1765: `1014`,
    1766: `1015`,
    1767: `1016`,
    1768: `1016`,
    1769: `1017`,
    177: `23`,
    1770: `1018`,
    1771: `1019`,
    1772: `1020`,
    1773: `1020`,
    1774: `1020`,
    1775: `1021`,
    1776: `1022`,
    1777: `1022`,
    1778: `1023`,
    1779: `1023`,
    178: `23`,
    1780: `1023`,
    1781: `1023`,
    1782: `1023`,
    1783: `1023`,
    1784: `1023`,
    1785: `1023`,
    1786: `1023`,
    1787: `1023`,
    1788: `1024`,
    1789: `1024`,
    179: `23`,
    1790: `1025`,
    1791: `1026`,
    1792: `1026`,
    1793: `1026`,
    1794: `1027`,
    1795: `1028`,
    1796: `1029`,
    1797: `1029`,
    1798: `1030`,
    1799: `1031`,
    18: `2`,
    180: `23`,
    1800: `1031`,
    1801: `1031`,
    1802: `1032`,
    1803: `1032`,
    1804: `1033`,
    1805: `1033`,
    1806: `1034`,
    1807: `1034`,
    1808: `1035`,
    1809: `1036`,
    181: `23`,
    1810: `1037`,
    1811: `1037`,
    1812: `1038`,
    1813: `1039`,
    1814: `1039`,
    1815: `1040`,
    1816: `1040`,
    1817: `1040`,
    1818: `1040`,
    1819: `1040`,
    182: `23`,
    1820: `1040`,
    1821: `1041`,
    1822: `1041`,
    1823: `1042`,
    1824: `1043`,
    1825: `1046`,
    1826: `1047`,
    1827: `1048`,
    1828: `1048`,
    1829: `1049`,
    183: `23`,
    1830: `1049`,
    1831: `1050`,
    1832: `1051`,
    1833: `1051`,
    1834: `1051`,
    1835: `1052`,
    1836: `1053`,
    1837: `1054`,
    1838: `1055`,
    1839: `1056`,
    184: `23`,
    1840: `1056`,
    1841: `1056`,
    1842: `1057`,
    1843: `1057`,
    1844: `1058`,
    1845: `1058`,
    1846: `1059`,
    1847: `1059`,
    1848: `1060`,
    1849: `1060`,
    185: `23`,
    1850: `1061`,
    1851: `1062`,
    1852: `1063`,
    1853: `1063`,
    1854: `1064`,
    1855: `1064`,
    1856: `1065`,
    1857: `1065`,
    1858: `1066`,
    1859: `1066`,
    186: `23`,
    1860: `1068`,
    1861: `1068`,
    1862: `1069`,
    1863: `1069`,
    1864: `1070`,
    1865: `1070`,
    1866: `1070`,
    1867: `1071`,
    1868: `1071`,
    1869: `1072`,
    187: `23`,
    1870: `1072`,
    1871: `1072`,
    1872: `1073`,
    1873: `1073`,
    1874: `1074`,
    1875: `1075`,
    1876: `1075`,
    1877: `1076`,
    1878: `1077`,
    1879: `1077`,
    188: `23`,
    1880: `1077`,
    1881: `1078`,
    1882: `1078`,
    1883: `1079`,
    1884: `1079`,
    1885: `1080`,
    1886: `1081`,
    1887: `1082`,
    1888: `1082`,
    1889: `1083`,
    189: `23`,
    1890: `1083`,
    1891: `1083`,
    1892: `1084`,
    1893: `1085`,
    1894: `1085`,
    1895: `1086`,
    1896: `1086`,
    1897: `1086`,
    1898: `1087`,
    1899: `1088`,
    19: `2`,
    190: `23`,
    1900: `1088`,
    1901: `1089`,
    1902: `1089`,
    1903: `1090`,
    1904: `1091`,
    1905: `1092`,
    1906: `1093`,
    1907: `1093`,
    1908: `1094`,
    1909: `1095`,
    191: `23`,
    1910: `1096`,
    1911: `1096`,
    1912: `1097`,
    1913: `1098`,
    1914: `1099`,
    1915: `1100`,
    1916: `1101`,
    1917: `1101`,
    1918: `1102`,
    1919: `1103`,
    192: `23`,
    1920: `1104`,
    1921: `1105`,
    1922: `1106`,
    1923: `1106`,
    1924: `1107`,
    1925: `1107`,
    1926: `1108`,
    1927: `1108`,
    1928: `1109`,
    1929: `1109`,
    193: `23`,
    1930: `1110`,
    1931: `1110`,
    1932: `1111`,
    1933: `1111`,
    1934: `1111`,
    1935: `1114`,
    1936: `1114`,
    1937: `1115`,
    1938: `1115`,
    1939: `1116`,
    194: `23`,
    1940: `1116`,
    1941: `1117`,
    1942: `1118`,
    1943: `1119`,
    1944: `1119`,
    1945: `1119`,
    1946: `1120`,
    1947: `1121`,
    1948: `1121`,
    1949: `1122`,
    195: `23`,
    1950: `1122`,
    1951: `1122`,
    1952: `1122`,
    1953: `1122`,
    1954: `1122`,
    1955: `1122`,
    1956: `1122`,
    1957: `1122`,
    1958: `1122`,
    1959: `1123`,
    196: `23`,
    1960: `1123`,
    1961: `1124`,
    1962: `1125`,
    1963: `1126`,
    1964: `1126`,
    1965: `1127`,
    1966: `1127`,
    1967: `1128`,
    1968: `1128`,
    1969: `1129`,
    197: `23`,
    1970: `1130`,
    1971: `1130`,
    1972: `1131`,
    1973: `1131`,
    1974: `1131`,
    1975: `1132`,
    1976: `1133`,
    1977: `1133`,
    1978: `1134`,
    1979: `1134`,
    198: `23`,
    1980: `1134`,
    1981: `1135`,
    1982: `1136`,
    1983: `1136`,
    1984: `1137`,
    1985: `1138`,
    1986: `1139`,
    1987: `1139`,
    1988: `1140`,
    1989: `1141`,
    199: `23`,
    1990: `1142`,
    1991: `1142`,
    1992: `1143`,
    1993: `1144`,
    1994: `1145`,
    1995: `1145`,
    1996: `1146`,
    1997: `1147`,
    1998: `1148`,
    1999: `1148`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1149`,
    2001: `1149`,
    2002: `1150`,
    2003: `1150`,
    2004: `1151`,
    2005: `1151`,
    2006: `1151`,
    2007: `1153`,
    2008: `1153`,
    2009: `1154`,
    201: `23`,
    2010: `1154`,
    2011: `1155`,
    2012: `1155`,
    2013: `1156`,
    2014: `1157`,
    2015: `1158`,
    2016: `1158`,
    2017: `1159`,
    2018: `1159`,
    2019: `1160`,
    202: `25`,
    2020: `1160`,
    2021: `1160`,
    2022: `1161`,
    2023: `1161`,
    2024: `1162`,
    2025: `1162`,
    2026: `1163`,
    2027: `1163`,
    2028: `1164`,
    2029: `1165`,
    203: `27`,
    2030: `1165`,
    2031: `1166`,
    2032: `1166`,
    2033: `1166`,
    2034: `1166`,
    2035: `1166`,
    2036: `1166`,
    2037: `1167`,
    2038: `1167`,
    2039: `1168`,
    204: `27`,
    2040: `1169`,
    2041: `1170`,
    2042: `1170`,
    2043: `1171`,
    2044: `1172`,
    2045: `1172`,
    2046: `1173`,
    2047: `1174`,
    2048: `1175`,
    2049: `1177`,
    205: `27`,
    2050: `1177`,
    2051: `1178`,
    2052: `1178`,
    2053: `1178`,
    2054: `1179`,
    2055: `1179`,
    2056: `1180`,
    2057: `1181`,
    2058: `1181`,
    2059: `1182`,
    206: `28`,
    2060: `1182`,
    2061: `1183`,
    2062: `1183`,
    2063: `1183`,
    2064: `1184`,
    2065: `1186`,
    2066: `1186`,
    2067: `1187`,
    2068: `1187`,
    2069: `1188`,
    207: `28`,
    2070: `1188`,
    2071: `1188`,
    2072: `1189`,
    2073: `1189`,
    2074: `1189`,
    2075: `1189`,
    2076: `1189`,
    2077: `1189`,
    2078: `1189`,
    2079: `1189`,
    208: `30`,
    2080: `1189`,
    2081: `1189`,
    2082: `1189`,
    2083: `1189`,
    2084: `1189`,
    2085: `1189`,
    2086: `1189`,
    2087: `1189`,
    2088: `1189`,
    2089: `1189`,
    209: `31`,
    2090: `1189`,
    2091: `1189`,
    2092: `1189`,
    2093: `1189`,
    2094: `1189`,
    2095: `1189`,
    2096: `1189`,
    2097: `1189`,
    2098: `1189`,
    2099: `1189`,
    21: `2`,
    210: `32`,
    2100: `1189`,
    2101: `1189`,
    2102: `1189`,
    2103: `1189`,
    2104: `1189`,
    2105: `1189`,
    2106: `1189`,
    2107: `1189`,
    2108: `1189`,
    2109: `1189`,
    211: `33`,
    2110: `1189`,
    2111: `1189`,
    2112: `1189`,
    2113: `1189`,
    2114: `1189`,
    2115: `1189`,
    2116: `1189`,
    2117: `1189`,
    2118: `1189`,
    2119: `1189`,
    212: `33`,
    2120: `1189`,
    2121: `1189`,
    2122: `1189`,
    2123: `1189`,
    2124: `1189`,
    2125: `1189`,
    2126: `1189`,
    2127: `1189`,
    2128: `1189`,
    2129: `1189`,
    213: `34`,
    2130: `1189`,
    2131: `1189`,
    2132: `1190`,
    2133: `1190`,
    2134: `1191`,
    2135: `1191`,
    2136: `1192`,
    2137: `1193`,
    2138: `1193`,
    2139: `1193`,
    214: `35`,
    2140: `1194`,
    2141: `1195`,
    2142: `1196`,
    2143: `1196`,
    2144: `1197`,
    2145: `1197`,
    2146: `1198`,
    2147: `1199`,
    2148: `1199`,
    2149: `1200`,
    215: `35`,
    2150: `1200`,
    2151: `1201`,
    2152: `1201`,
    2153: `1202`,
    2154: `1202`,
    2155: `1203`,
    2156: `1203`,
    2157: `1203`,
    2158: `1205`,
    2159: `1205`,
    216: `36`,
    2160: `1205`,
    2161: `1206`,
    2162: `1206`,
    2163: `1207`,
    2164: `1207`,
    2165: `1207`,
    2166: `1208`,
    2167: `1208`,
    2168: `1208`,
    2169: `1209`,
    217: `37`,
    2170: `1209`,
    2171: `1210`,
    2172: `1210`,
    2173: `1210`,
    2174: `1212`,
    2175: `1212`,
    2176: `1212`,
    2177: `1213`,
    2178: `1213`,
    2179: `1213`,
    218: `38`,
    2180: `1214`,
    2181: `1214`,
    2182: `1215`,
    2183: `1215`,
    2184: `1215`,
    2185: `1217`,
    2186: `1218`,
    2187: `1218`,
    2188: `1219`,
    2189: `1220`,
    219: `39`,
    2190: `1221`,
    2191: `1222`,
    2192: `1222`,
    2193: `1223`,
    2194: `1224`,
    2195: `1225`,
    2196: `1226`,
    2197: `1226`,
    2198: `1227`,
    2199: `1228`,
    22: `2`,
    220: `39`,
    2200: `1229`,
    2201: `1230`,
    2202: `1230`,
    2203: `1231`,
    2204: `1232`,
    2205: `1233`,
    2206: `1233`,
    2207: `1233`,
    2208: `1234`,
    2209: `1234`,
    221: `41`,
    2210: `1234`,
    2211: `1235`,
    2212: `1236`,
    2213: `1237`,
    2214: `1238`,
    2215: `1238`,
    2216: `1238`,
    2217: `1240`,
    2218: `1240`,
    2219: `1240`,
    222: `42`,
    2220: `1242`,
    2221: `1242`,
    2222: `1242`,
    2223: `1244`,
    2224: `1244`,
    2225: `1245`,
    2226: `1245`,
    2227: `1245`,
    2228: `1246`,
    2229: `1246`,
    223: `42`,
    2230: `1247`,
    2231: `1247`,
    2232: `1247`,
    2233: `1249`,
    2234: `1249`,
    2235: `1250`,
    2236: `1250`,
    2237: `1250`,
    2238: `1251`,
    2239: `1251`,
    224: `43`,
    2240: `1252`,
    2241: `1252`,
    2242: `1252`,
    2243: `1254`,
    2244: `1254`,
    2245: `1254`,
    2246: `1256`,
    2247: `1256`,
    2248: `1257`,
    2249: `1257`,
    225: `44`,
    2250: `1258`,
    2251: `1258`,
    2252: `1258`,
    2253: `1260`,
    2254: `1260`,
    2255: `1261`,
    2256: `1261`,
    2257: `1262`,
    2258: `1262`,
    2259: `1263`,
    226: `45`,
    2260: `1264`,
    2261: `1265`,
    2262: `1265`,
    2263: `1265`,
    2264: `1266`,
    2265: `1266`,
    2266: `1267`,
    2267: `1267`,
    2268: `1268`,
    2269: `1268`,
    227: `45`,
    2270: `1269`,
    2271: `1269`,
    2272: `1270`,
    2273: `1271`,
    2274: `1272`,
    2275: `1272`,
    2276: `1273`,
    2277: `1273`,
    2278: `1274`,
    2279: `1274`,
    228: `45`,
    2280: `1275`,
    2281: `1275`,
    2282: `1277`,
    2283: `1277`,
    2284: `1278`,
    2285: `1278`,
    2286: `1279`,
    2287: `1279`,
    2288: `1279`,
    2289: `1280`,
    229: `46`,
    2290: `1280`,
    2291: `1281`,
    2292: `1281`,
    2293: `1281`,
    2294: `1282`,
    2295: `1282`,
    2296: `1283`,
    2297: `1284`,
    2298: `1284`,
    2299: `1285`,
    23: `2`,
    230: `46`,
    2300: `1286`,
    2301: `1286`,
    2302: `1286`,
    2303: `1287`,
    2304: `1287`,
    2305: `1288`,
    2306: `1288`,
    2307: `1289`,
    2308: `1290`,
    2309: `1291`,
    231: `47`,
    2310: `1291`,
    2311: `1292`,
    2312: `1292`,
    2313: `1292`,
    2314: `1293`,
    2315: `1294`,
    2316: `1294`,
    2317: `1295`,
    2318: `1295`,
    2319: `1295`,
    232: `48`,
    2320: `1296`,
    2321: `1297`,
    2322: `1297`,
    2323: `1298`,
    2324: `1298`,
    2325: `1299`,
    2326: `1300`,
    2327: `1301`,
    2328: `1302`,
    2329: `1302`,
    233: `49`,
    2330: `1303`,
    2331: `1304`,
    2332: `1305`,
    2333: `1305`,
    2334: `1306`,
    2335: `1307`,
    2336: `1308`,
    2337: `1309`,
    2338: `1310`,
    2339: `1310`,
    234: `49`,
    2340: `1311`,
    2341: `1312`,
    2342: `1313`,
    2343: `1313`,
    2344: `1314`,
    2345: `1314`,
    2346: `1315`,
    2347: `1315`,
    2348: `1316`,
    2349: `1316`,
    235: `50`,
    2350: `1317`,
    2351: `1317`,
    2352: `1318`,
    2353: `1318`,
    2354: `1318`,
    2355: `1320`,
    2356: `1320`,
    2357: `1321`,
    2358: `1322`,
    2359: `1322`,
    236: `50`,
    2360: `1323`,
    2361: `1324`,
    2362: `1324`,
    2363: `1325`,
    2364: `1325`,
    2365: `1326`,
    2366: `1327`,
    2367: `1328`,
    2368: `1328`,
    2369: `1328`,
    237: `51`,
    2370: `1329`,
    2371: `1329`,
    2372: `1330`,
    2373: `1330`,
    2374: `1331`,
    2375: `1332`,
    2376: `1333`,
    2377: `1333`,
    2378: `1334`,
    2379: `1334`,
    238: `51`,
    2380: `1334`,
    2381: `1335`,
    2382: `1336`,
    2383: `1336`,
    2384: `1337`,
    2385: `1337`,
    2386: `1337`,
    2387: `1338`,
    2388: `1339`,
    2389: `1339`,
    239: `51`,
    2390: `1340`,
    2391: `1340`,
    2392: `1341`,
    2393: `1342`,
    2394: `1343`,
    2395: `1344`,
    2396: `1344`,
    2397: `1345`,
    2398: `1346`,
    2399: `1347`,
    24: `2`,
    240: `52`,
    2400: `1347`,
    2401: `1348`,
    2402: `1349`,
    2403: `1350`,
    2404: `1351`,
    2405: `1352`,
    2406: `1352`,
    2407: `1353`,
    2408: `1354`,
    2409: `1355`,
    241: `52`,
    2410: `1356`,
    2411: `1357`,
    2412: `1357`,
    2413: `1358`,
    2414: `1358`,
    2415: `1359`,
    2416: `1359`,
    2417: `1360`,
    2418: `1360`,
    2419: `1361`,
    242: `53`,
    2420: `1361`,
    2421: `1362`,
    2422: `1362`,
    2423: `1362`,
    2424: `1364`,
    2425: `1364`,
    2426: `1365`,
    2427: `1366`,
    2428: `1366`,
    2429: `1367`,
    243: `53`,
    2430: `1368`,
    2431: `1368`,
    2432: `1369`,
    2433: `1369`,
    2434: `1370`,
    2435: `1371`,
    2436: `1372`,
    2437: `1372`,
    2438: `1372`,
    2439: `1373`,
    244: `53`,
    2440: `1373`,
    2441: `1374`,
    2442: `1374`,
    2443: `1375`,
    2444: `1376`,
    2445: `1377`,
    2446: `1377`,
    2447: `1378`,
    2448: `1378`,
    2449: `1378`,
    245: `53`,
    2450: `1379`,
    2451: `1380`,
    2452: `1380`,
    2453: `1381`,
    2454: `1381`,
    2455: `1381`,
    2456: `1382`,
    2457: `1383`,
    2458: `1383`,
    2459: `1384`,
    246: `53`,
    2460: `1384`,
    2461: `1385`,
    2462: `1386`,
    2463: `1387`,
    2464: `1388`,
    2465: `1388`,
    2466: `1389`,
    2467: `1390`,
    2468: `1391`,
    2469: `1391`,
    247: `53`,
    2470: `1392`,
    2471: `1393`,
    2472: `1394`,
    2473: `1395`,
    2474: `1396`,
    2475: `1396`,
    2476: `1397`,
    2477: `1398`,
    2478: `1399`,
    2479: `1399`,
    248: `54`,
    2480: `1400`,
    2481: `1400`,
    2482: `1401`,
    2483: `1401`,
    2484: `1402`,
    2485: `1402`,
    2486: `1403`,
    2487: `1403`,
    2488: `1404`,
    2489: `1404`,
    249: `54`,
    2490: `1404`,
    2491: `1406`,
    2492: `1406`,
    2493: `1408`,
    2494: `1408`,
    2495: `1409`,
    2496: `1409`,
    2497: `1409`,
    2498: `1410`,
    2499: `1410`,
    25: `2`,
    250: `55`,
    2500: `1411`,
    2501: `1411`,
    2502: `1411`,
    2503: `1412`,
    2504: `1413`,
    2505: `1415`,
    2506: `1415`,
    2507: `1416`,
    2508: `1416`,
    2509: `1417`,
    251: `56`,
    2510: `1417`,
    2511: `1417`,
    2512: `1419`,
    2513: `1420`,
    2514: `1420`,
    2515: `1421`,
    2516: `1421`,
    2517: `1422`,
    2518: `1422`,
    2519: `1423`,
    252: `57`,
    2520: `1423`,
    2521: `1423`,
    2522: `1425`,
    2523: `1425`,
    2524: `1426`,
    2525: `1426`,
    2526: `1427`,
    2527: `1428`,
    2528: `1430`,
    2529: `1430`,
    253: `57`,
    2530: `1430`,
    2531: `1432`,
    2532: `1432`,
    2533: `1433`,
    2534: `1434`,
    2535: `1434`,
    2536: `1435`,
    2537: `1436`,
    2538: `1438`,
    2539: `1439`,
    254: `58`,
    2540: `1439`,
    2541: `1440`,
    2542: `1440`,
    2543: `1441`,
    2544: `1441`,
    2545: `1441`,
    2546: `1442`,
    2547: `1442`,
    2548: `1442`,
    2549: `1444`,
    255: `59`,
    2550: `1445`,
    2551: `1446`,
    2552: `1447`,
    2553: `1448`,
    2554: `1450`,
    2555: `1451`,
    2556: `1451`,
    2557: `1452`,
    2558: `1453`,
    2559: `1453`,
    256: `61`,
    2560: `1454`,
    2561: `1454`,
    2562: `1455`,
    2563: `1455`,
    2564: `1456`,
    2565: `1457`,
    2566: `1459`,
    2567: `1460`,
    2568: `1460`,
    2569: `1461`,
    257: `61`,
    2570: `1461`,
    2571: `1462`,
    2572: `1462`,
    2573: `1463`,
    2574: `1463`,
    2575: `1464`,
    2576: `1464`,
    2577: `1465`,
    2578: `1465`,
    2579: `1466`,
    258: `62`,
    2580: `1467`,
    2581: `1469`,
    2582: `1469`,
    2583: `1469`,
    2584: `1471`,
    2585: `1471`,
    2586: `1471`,
    2587: `1473`,
    2588: `1473`,
    2589: `1474`,
    259: `62`,
    2590: `1474`,
    2591: `1474`,
    2592: `1475`,
    2593: `1475`,
    2594: `1476`,
    2595: `1476`,
    2596: `1476`,
    2597: `1478`,
    2598: `1479`,
    2599: `1481`,
    26: `2`,
    260: `62`,
    2600: `1482`,
    2601: `1483`,
    2602: `1484`,
    2603: `1484`,
    2604: `1485`,
    2605: `1485`,
    2606: `1486`,
    2607: `1486`,
    2608: `1486`,
    2609: `1487`,
    261: `63`,
    2610: `1489`,
    2611: `1490`,
    2612: `1491`,
    2613: `1491`,
    2614: `1491`,
    2615: `1492`,
    2616: `1493`,
    2617: `1493`,
    2618: `1496`,
    2619: `1496`,
    262: `63`,
    2620: `1497`,
    2621: `1497`,
    2622: `1498`,
    2623: `1499`,
    2624: `1500`,
    2625: `1501`,
    2626: `1501`,
    2627: `1502`,
    2628: `1503`,
    2629: `1503`,
    263: `64`,
    2630: `1504`,
    2631: `1504`,
    2632: `1505`,
    2633: `1505`,
    2634: `1506`,
    2635: `1507`,
    2636: `1508`,
    2637: `1508`,
    2638: `1509`,
    2639: `1510`,
    264: `65`,
    2640: `1511`,
    2641: `1512`,
    2642: `1512`,
    2643: `1513`,
    2644: `1514`,
    2645: `1515`,
    2646: `1517`,
    2647: `1518`,
    2648: `1519`,
    2649: `1520`,
    265: `66`,
    2650: `1520`,
    2651: `1520`,
    2652: `1521`,
    2653: `1521`,
    2654: `1522`,
    2655: `1523`,
    2656: `1524`,
    2657: `1526`,
    2658: `1527`,
    2659: `1527`,
    266: `66`,
    2660: `1527`,
    2661: `1528`,
    2662: `1528`,
    2663: `1529`,
    2664: `1530`,
    2665: `1530`,
    2666: `1530`,
    2667: `1531`,
    2668: `1531`,
    2669: `1532`,
    267: `66`,
    2670: `1533`,
    2671: `1533`,
    2672: `1534`,
    2673: `1535`,
    2674: `1535`,
    2675: `1536`,
    2676: `1537`,
    2677: `1537`,
    2678: `1537`,
    2679: `1538`,
    268: `66`,
    2680: `1538`,
    2681: `1539`,
    2682: `1540`,
    2683: `1540`,
    2684: `1540`,
    2685: `1541`,
    2686: `1541`,
    2687: `1542`,
    2688: `1543`,
    2689: `1543`,
    269: `66`,
    2690: `1543`,
    2691: `1544`,
    2692: `1545`,
    2693: `1545`,
    2694: `1546`,
    2695: `1547`,
    2696: `1547`,
    2697: `1547`,
    2698: `1548`,
    2699: `1549`,
    27: `2`,
    270: `66`,
    2700: `1549`,
    2701: `1550`,
    2702: `1551`,
    2703: `1551`,
    2704: `1551`,
    2705: `1552`,
    2706: `1553`,
    2707: `1553`,
    2708: `1554`,
    2709: `1555`,
    271: `66`,
    2710: `1555`,
    2711: `1555`,
    2712: `1556`,
    2713: `1557`,
    2714: `1557`,
    2715: `1558`,
    2716: `1559`,
    2717: `1559`,
    2718: `1559`,
    2719: `1560`,
    272: `66`,
    2720: `1561`,
    2721: `1561`,
    2722: `1562`,
    2723: `1563`,
    2724: `1563`,
    2725: `1563`,
    2726: `1564`,
    2727: `1565`,
    2728: `1565`,
    2729: `1566`,
    273: `66`,
    2730: `1567`,
    2731: `1567`,
    2732: `1567`,
    2733: `1568`,
    2734: `1568`,
    2735: `1569`,
    2736: `1569`,
    2737: `1569`,
    2738: `1570`,
    2739: `1571`,
    274: `66`,
    2740: `1571`,
    2741: `1572`,
    2742: `1574`,
    2743: `1575`,
    2744: `1576`,
    2745: `1577`,
    2746: `1577`,
    2747: `1577`,
    2748: `1578`,
    2749: `1578`,
    275: `66`,
    2750: `1579`,
    2751: `1579`,
    2752: `1579`,
    2753: `1580`,
    2754: `1580`,
    2755: `1580`,
    2756: `1582`,
    2757: `1583`,
    2758: `1583`,
    2759: `1583`,
    276: `66`,
    2760: `1584`,
    2761: `1585`,
    2762: `1586`,
    2763: `1587`,
    2764: `1588`,
    2765: `1590`,
    2766: `1591`,
    2767: `1591`,
    2768: `1591`,
    2769: `1593`,
    277: `66`,
    2770: `1594`,
    2771: `1594`,
    2772: `1594`,
    2773: `1596`,
    2774: `1596`,
    2775: `1597`,
    2776: `1598`,
    2777: `1598`,
    2778: `1599`,
    2779: `1601`,
    278: `66`,
    2780: `1602`,
    2781: `1603`,
    2782: `1603`,
    2783: `1604`,
    2784: `1606`,
    2785: `1606`,
    2786: `1607`,
    2787: `1608`,
    2788: `1608`,
    2789: `1609`,
    279: `66`,
    2790: `1611`,
    2791: `1612`,
    2792: `1612`,
    2793: `1613`,
    2794: `1615`,
    2795: `1616`,
    2796: `1617`,
    2797: `1618`,
    2798: `1619`,
    2799: `1619`,
    28: `2`,
    280: `66`,
    2800: `1620`,
    2801: `1621`,
    2802: `1622`,
    2803: `1623`,
    2804: `1625`,
    2805: `1625`,
    2806: `1626`,
    2807: `1626`,
    2808: `1627`,
    2809: `1628`,
    281: `66`,
    2810: `1629`,
    2811: `1629`,
    2812: `1629`,
    2813: `1630`,
    2814: `1630`,
    2815: `1630`,
    2816: `1633`,
    2817: `1633`,
    2818: `1634`,
    2819: `1634`,
    282: `66`,
    2820: `1635`,
    2821: `1636`,
    2822: `1637`,
    2823: `1638`,
    2824: `1638`,
    2825: `1639`,
    2826: `1640`,
    2827: `1640`,
    2828: `1641`,
    2829: `1641`,
    283: `67`,
    2830: `1642`,
    2831: `1642`,
    2832: `1643`,
    2833: `1644`,
    2834: `1645`,
    2835: `1645`,
    2836: `1646`,
    2837: `1646`,
    2838: `1647`,
    2839: `1648`,
    284: `67`,
    2840: `1649`,
    2841: `1649`,
    2842: `1650`,
    2843: `1650`,
    2844: `1651`,
    2845: `1652`,
    2846: `1653`,
    2847: `1653`,
    2848: `1654`,
    2849: `1655`,
    285: `67`,
    2850: `1656`,
    2851: `1658`,
    2852: `1659`,
    2853: `1659`,
    2854: `1660`,
    286: `69`,
    287: `69`,
    288: `69`,
    289: `70`,
    29: `2`,
    290: `71`,
    291: `71`,
    292: `73`,
    293: `74`,
    294: `75`,
    295: `76`,
    296: `76`,
    297: `77`,
    298: `78`,
    299: `79`,
    3: `2`,
    30: `2`,
    300: `79`,
    301: `80`,
    302: `81`,
    303: `82`,
    304: `83`,
    305: `83`,
    306: `84`,
    307: `84`,
    308: `84`,
    309: `86`,
    31: `2`,
    310: `86`,
    311: `86`,
    312: `87`,
    313: `87`,
    314: `87`,
    315: `88`,
    316: `89`,
    317: `89`,
    318: `90`,
    319: `90`,
    32: `2`,
    320: `92`,
    321: `93`,
    322: `94`,
    323: `95`,
    324: `95`,
    325: `96`,
    326: `96`,
    327: `97`,
    328: `98`,
    329: `99`,
    33: `2`,
    330: `100`,
    331: `101`,
    332: `102`,
    333: `103`,
    334: `104`,
    335: `104`,
    336: `105`,
    337: `105`,
    338: `105`,
    339: `108`,
    34: `4`,
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
    35: `4`,
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
    36: `5`,
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
    37: `5`,
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
    38: `5`,
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
    39: `6`,
    390: `108`,
    391: `108`,
    392: `108`,
    393: `108`,
    394: `108`,
    395: `108`,
    396: `108`,
    397: `108`,
    398: `109`,
    399: `109`,
    4: `2`,
    40: `7`,
    400: `110`,
    401: `110`,
    402: `110`,
    403: `112`,
    404: `112`,
    405: `112`,
    406: `113`,
    407: `113`,
    408: `115`,
    409: `116`,
    41: `8`,
    410: `117`,
    411: `117`,
    412: `118`,
    413: `118`,
    414: `119`,
    415: `120`,
    416: `120`,
    417: `121`,
    418: `122`,
    419: `123`,
    42: `9`,
    420: `124`,
    421: `124`,
    422: `125`,
    423: `125`,
    424: `125`,
    425: `127`,
    426: `127`,
    427: `127`,
    428: `128`,
    429: `128`,
    43: `10`,
    430: `128`,
    431: `129`,
    432: `130`,
    433: `130`,
    434: `130`,
    435: `131`,
    436: `132`,
    437: `132`,
    438: `133`,
    439: `133`,
    44: `11`,
    440: `134`,
    441: `134`,
    442: `136`,
    443: `137`,
    444: `138`,
    445: `138`,
    446: `138`,
    447: `139`,
    448: `139`,
    449: `140`,
    45: `11`,
    450: `140`,
    451: `141`,
    452: `142`,
    453: `143`,
    454: `143`,
    455: `144`,
    456: `145`,
    457: `146`,
    458: `147`,
    459: `148`,
    46: `12`,
    460: `148`,
    461: `149`,
    462: `149`,
    463: `149`,
    464: `151`,
    465: `151`,
    466: `151`,
    467: `152`,
    468: `152`,
    469: `154`,
    47: `13`,
    470: `154`,
    471: `155`,
    472: `156`,
    473: `157`,
    474: `160`,
    475: `160`,
    476: `160`,
    477: `162`,
    478: `163`,
    479: `164`,
    48: `14`,
    480: `165`,
    481: `165`,
    482: `166`,
    483: `167`,
    484: `167`,
    485: `167`,
    486: `168`,
    487: `169`,
    488: `170`,
    489: `171`,
    49: `14`,
    490: `172`,
    491: `173`,
    492: `173`,
    493: `173`,
    494: `174`,
    495: `174`,
    496: `176`,
    497: `176`,
    498: `177`,
    499: `178`,
    5: `2`,
    50: `15`,
    500: `179`,
    501: `182`,
    502: `182`,
    503: `182`,
    504: `182`,
    505: `182`,
    506: `182`,
    507: `183`,
    508: `183`,
    509: `184`,
    51: `16`,
    510: `185`,
    511: `187`,
    512: `188`,
    513: `191`,
    514: `191`,
    515: `192`,
    516: `193`,
    517: `194`,
    518: `197`,
    519: `197`,
    52: `17`,
    520: `197`,
    521: `198`,
    522: `198`,
    523: `199`,
    524: `200`,
    525: `200`,
    526: `201`,
    527: `201`,
    528: `201`,
    529: `203`,
    53: `18`,
    530: `203`,
    531: `203`,
    532: `204`,
    533: `204`,
    534: `204`,
    535: `205`,
    536: `206`,
    537: `206`,
    538: `207`,
    539: `207`,
    54: `19`,
    540: `209`,
    541: `209`,
    542: `210`,
    543: `211`,
    544: `212`,
    545: `215`,
    546: `215`,
    547: `215`,
    548: `216`,
    549: `216`,
    55: `21`,
    550: `217`,
    551: `219`,
    552: `220`,
    553: `220`,
    554: `221`,
    555: `222`,
    556: `223`,
    557: `223`,
    558: `224`,
    559: `224`,
    56: `21`,
    560: `225`,
    561: `226`,
    562: `227`,
    563: `228`,
    564: `228`,
    565: `228`,
    566: `229`,
    567: `229`,
    568: `229`,
    569: `230`,
    57: `21`,
    570: `230`,
    571: `230`,
    572: `231`,
    573: `231`,
    574: `232`,
    575: `232`,
    576: `232`,
    577: `234`,
    578: `234`,
    579: `234`,
    58: `21`,
    580: `235`,
    581: `235`,
    582: `237`,
    583: `237`,
    584: `238`,
    585: `239`,
    586: `240`,
    587: `243`,
    588: `243`,
    589: `243`,
    59: `21`,
    590: `245`,
    591: `246`,
    592: `247`,
    593: `247`,
    594: `248`,
    595: `248`,
    596: `249`,
    597: `250`,
    598: `250`,
    599: `250`,
    6: `2`,
    60: `21`,
    600: `251`,
    601: `252`,
    602: `253`,
    603: `254`,
    604: `255`,
    605: `256`,
    606: `256`,
    607: `256`,
    608: `257`,
    609: `257`,
    61: `21`,
    610: `258`,
    611: `258`,
    612: `258`,
    613: `261`,
    614: `261`,
    615: `262`,
    616: `263`,
    617: `264`,
    618: `267`,
    619: `267`,
    62: `21`,
    620: `267`,
    621: `268`,
    622: `268`,
    623: `269`,
    624: `270`,
    625: `270`,
    626: `271`,
    627: `271`,
    628: `271`,
    629: `274`,
    63: `21`,
    630: `274`,
    631: `275`,
    632: `276`,
    633: `277`,
    634: `280`,
    635: `280`,
    636: `280`,
    637: `281`,
    638: `281`,
    639: `282`,
    64: `21`,
    640: `283`,
    641: `283`,
    642: `284`,
    643: `284`,
    644: `284`,
    645: `287`,
    646: `287`,
    647: `288`,
    648: `289`,
    649: `290`,
    65: `21`,
    650: `293`,
    651: `293`,
    652: `293`,
    653: `294`,
    654: `294`,
    655: `295`,
    656: `296`,
    657: `296`,
    658: `297`,
    659: `297`,
    66: `21`,
    660: `297`,
    661: `300`,
    662: `300`,
    663: `301`,
    664: `302`,
    665: `303`,
    666: `306`,
    667: `306`,
    668: `306`,
    669: `307`,
    67: `21`,
    670: `307`,
    671: `308`,
    672: `309`,
    673: `309`,
    674: `310`,
    675: `310`,
    676: `310`,
    677: `312`,
    678: `312`,
    679: `312`,
    68: `21`,
    680: `313`,
    681: `313`,
    682: `315`,
    683: `315`,
    684: `316`,
    685: `317`,
    686: `318`,
    687: `321`,
    688: `321`,
    689: `321`,
    69: `21`,
    690: `322`,
    691: `323`,
    692: `325`,
    693: `326`,
    694: `327`,
    695: `328`,
    696: `329`,
    697: `329`,
    698: `330`,
    699: `331`,
    7: `2`,
    70: `21`,
    700: `331`,
    701: `331`,
    702: `332`,
    703: `332`,
    704: `332`,
    705: `333`,
    706: `333`,
    707: `334`,
    708: `334`,
    709: `334`,
    71: `21`,
    710: `336`,
    711: `336`,
    712: `336`,
    713: `337`,
    714: `337`,
    715: `337`,
    716: `338`,
    717: `339`,
    718: `339`,
    719: `340`,
    72: `21`,
    720: `340`,
    721: `342`,
    722: `342`,
    723: `343`,
    724: `344`,
    725: `345`,
    726: `348`,
    727: `348`,
    728: `348`,
    729: `349`,
    73: `21`,
    730: `349`,
    731: `350`,
    732: `352`,
    733: `353`,
    734: `353`,
    735: `354`,
    736: `355`,
    737: `356`,
    738: `356`,
    739: `357`,
    74: `21`,
    740: `357`,
    741: `358`,
    742: `359`,
    743: `360`,
    744: `361`,
    745: `361`,
    746: `361`,
    747: `362`,
    748: `362`,
    749: `362`,
    75: `21`,
    750: `363`,
    751: `363`,
    752: `363`,
    753: `364`,
    754: `364`,
    755: `365`,
    756: `365`,
    757: `365`,
    758: `367`,
    759: `367`,
    76: `21`,
    760: `367`,
    761: `368`,
    762: `369`,
    763: `369`,
    764: `369`,
    765: `370`,
    766: `371`,
    767: `371`,
    768: `372`,
    769: `372`,
    77: `21`,
    770: `374`,
    771: `375`,
    772: `376`,
    773: `376`,
    774: `376`,
    775: `377`,
    776: `377`,
    777: `378`,
    778: `379`,
    779: `379`,
    78: `21`,
    780: `380`,
    781: `381`,
    782: `382`,
    783: `383`,
    784: `383`,
    785: `384`,
    786: `385`,
    787: `386`,
    788: `386`,
    789: `387`,
    79: `21`,
    790: `387`,
    791: `387`,
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
    847: `390`,
    848: `390`,
    849: `390`,
    85: `21`,
    850: `390`,
    851: `391`,
    852: `391`,
    853: `392`,
    854: `392`,
    855: `392`,
    856: `394`,
    857: `394`,
    858: `395`,
    859: `395`,
    86: `21`,
    860: `396`,
    861: `398`,
    862: `399`,
    863: `400`,
    864: `401`,
    865: `401`,
    866: `402`,
    867: `403`,
    868: `403`,
    869: `403`,
    87: `21`,
    870: `404`,
    871: `405`,
    872: `406`,
    873: `407`,
    874: `408`,
    875: `409`,
    876: `418`,
    877: `418`,
    878: `419`,
    879: `420`,
    88: `21`,
    880: `420`,
    881: `421`,
    882: `421`,
    883: `421`,
    884: `422`,
    885: `423`,
    886: `424`,
    887: `424`,
    888: `424`,
    889: `425`,
    89: `21`,
    890: `426`,
    891: `426`,
    892: `427`,
    893: `427`,
    894: `427`,
    895: `427`,
    896: `427`,
    897: `427`,
    898: `427`,
    899: `427`,
    9: `2`,
    90: `21`,
    900: `427`,
    901: `427`,
    902: `428`,
    903: `428`,
    904: `429`,
    905: `430`,
    906: `431`,
    907: `431`,
    908: `432`,
    909: `432`,
    91: `21`,
    910: `433`,
    911: `433`,
    912: `434`,
    913: `435`,
    914: `435`,
    915: `436`,
    916: `436`,
    917: `436`,
    918: `437`,
    919: `438`,
    92: `21`,
    920: `438`,
    921: `439`,
    922: `439`,
    923: `439`,
    924: `440`,
    925: `441`,
    926: `441`,
    927: `442`,
    928: `443`,
    929: `444`,
    93: `21`,
    930: `444`,
    931: `445`,
    932: `446`,
    933: `447`,
    934: `447`,
    935: `448`,
    936: `449`,
    937: `450`,
    938: `450`,
    939: `451`,
    94: `21`,
    940: `452`,
    941: `453`,
    942: `453`,
    943: `454`,
    944: `454`,
    945: `455`,
    946: `455`,
    947: `457`,
    948: `457`,
    949: `458`,
    95: `21`,
    950: `458`,
    951: `458`,
    952: `459`,
    953: `460`,
    954: `460`,
    955: `460`,
    956: `461`,
    957: `461`,
    958: `462`,
    959: `462`,
    96: `21`,
    960: `463`,
    961: `464`,
    962: `464`,
    963: `465`,
    964: `465`,
    965: `466`,
    966: `466`,
    967: `467`,
    968: `468`,
    969: `468`,
    97: `21`,
    970: `469`,
    971: `469`,
    972: `470`,
    973: `470`,
    974: `471`,
    975: `472`,
    976: `472`,
    977: `473`,
    978: `473`,
    979: `474`,
    98: `21`,
    980: `475`,
    981: `476`,
    982: `476`,
    983: `477`,
    984: `477`,
    985: `478`,
    986: `478`,
    987: `479`,
    988: `480`,
    989: `480`,
    99: `21`,
    990: `481`,
    991: `481`,
    992: `482`,
    993: `482`,
    994: `482`,
    995: `483`,
    996: `484`,
    997: `484`,
    998: `485`,
    999: `486`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 218,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T19","name":"v10364","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_177","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_177","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_177","type":"tuple"},{"internalType":"bool","name":"_User_optin0_177","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2499","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3009","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3526","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4031","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4537","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5066","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5645","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6229","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T21","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v10315","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10321","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10328","type":"address"},{"internalType":"uint256","name":"v10329","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10339","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10347","type":"address"},{"internalType":"address payable","name":"v10348","type":"address"},{"internalType":"uint256","name":"v10349","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10279","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10286","type":"address"},{"internalType":"address payable","name":"v10287","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10291","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10303","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v10308","type":"address"},{"internalType":"address payable","name":"v10309","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10356","type":"uint256"},{"internalType":"address payable","name":"v10357","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_177","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_177","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_177","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_177","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_177","type":"tuple"},{"internalType":"bool","name":"_User_optin0_177","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v10367","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806040526060620048bc80380380916200001a826200009c565b6080391262000080576040516200003181620000d2565b608051815260a05161ffff19811681036200008057602082015260c051906001600160a01b038216820362000080576200007091604082015262000198565b604051613af7908162000da58239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000c357604052565b620000cd62000085565b604052565b606081019081106001600160401b03821117620000c357604052565b604081019081106001600160401b03821117620000c357604052565b60e081019081106001600160401b03821117620000c357604052565b608081019081106001600160401b03821117620000c357604052565b601f909101601f19168101906001600160401b03821190821017620000c357604052565b6040519061026082016001600160401b03811183821017620000c357604052565b604051906200019682620000d2565b565b6200019690600080805543600355610240620001b362000166565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152015262000416565b604051906200023d82620000d2565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000297575b6040528260005b8281106200028057505050565b82906200028c6200022e565b818401520162000273565b620002a162000085565b6200026c565b60405190620002b682620000ee565b60006020838281520152565b60405190620002d182620000ee565b6000602083620002e0620002a7565b81520152565b60405190620002f5826200010a565b8160c06000918281528260208201526200030e620002c2565b60408201528260608201528260808201528260a08201520152565b6040519060a082016001600160401b0381118382101762000393575b60405281620003536200022e565b81526200035f6200024f565b60208201526200036e620002a7565b60408201526200037d620002c2565b606082015260806200038e620002e6565b910152565b6200039d62000085565b62000345565b906001811015620003b55760051b0190565b634e487b7160e01b600052603260045260246000fd5b60405190620003da826200010a565b600060c083828152826020820152826040820152620003f8620002e6565b60608201528260808201526200040d6200024f565b60a08201520152565b62000196906200042562000329565b620004446200043e6200043a60045460ff1690565b1590565b620005f5565b60408051338152835160208083019190915284015161ffff191681830152838201516001600160a01b031660608201529091620005d8917f19beb4b4ae800ef164657ae1c238d1e90f50effd8bb91dc7502d5d13755b59e090608090a1620004b984518015908115620005e8575b5062000616565b60009283825152620005d260209285848251015285838251015280519084810191825152620004e9341562000637565b608084820160058151526064878251015251916060810192835152620005128784510160019052565b019087825152620005268683510160019052565b51848251015286606082510152866080825101528660a0825101528660c0825101526200059c6200058d856200055b620003cb565b3381529a6200057f8c8a620005758185015161ffff191690565b61ffff1916910152565b01516001600160a01b031690565b6001600160a01b031689860152565b51606088015243608088015251918251908085830151920151151591620005c262000187565b9588875286015284019015159052565b62000658565b60a083015260c082015262000af1565b90506001541438620004b2565b15620005fd57565b60405163100960cb60e01b815260116004820152602490fd5b156200061e57565b60405163100960cb60e01b815260126004820152602490fd5b156200063f57565b60405163100960cb60e01b815260136004820152602490fd5b9190620006646200024f565b926000805b6001811062000679575050508252565b620006858184620003a3565b51620006928288620003a3565b526200069f8187620003a3565b506000198114620006b35760010162000669565b634e487b7160e01b82526011600452602482fd5b506040513d6000823e3d90fd5b90600182811c9216801562000706575b6020831014620006f057565b634e487b7160e01b600052602260045260246000fd5b91607f1691620006e4565b8181106200071d575050565b6000815560010162000711565b62000737600254620006d4565b80620007405750565b601f81116001146200075457506000600255565b60026000526200079c90601f0160051c6000805160206200489c833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000711565b6000602081208160025555565b604051906101a082016001600160401b0381118382101762000838575b60405281610180600091828152826020820152826040820152620007e9620002e6565b6060820152620007f86200024f565b60808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201526200082e6200022e565b6101608201520152565b6200084262000085565b620007c6565b60408091805184526020810151602085015201511515910152565b906000905b600182106200087657505050565b60206060826200088a600194875162000848565b0193019101909162000868565b81516001600160a01b03168152610320810192916103009060208181015161ffff1916908401526040818101516001600160a01b0316908401526200093a6060820151606085019060c06101009180518452602081015115156020850152602060408201518181518051604089015201516060870152015115156080850152606081015160a085015260808101518285015260a081015160e08501520151910152565b60808101519062000952610180928386019062000863565b60a08101516101e085015260c081015161020085015260e0810151610220850152610100810151610240850152610120810151610260850152610140810151610280850152620009ad6101608201516102a086019062000848565b0151910152565b90601f8211620009c2575050565b620001969160026000526020600020906020601f840160051c83019310620009f3575b601f0160051c019062000711565b9091508190620009e5565b80519091906001600160401b03811162000ae1575b62000a2b8162000a25600254620006d4565b620009b4565b602080601f831160011462000a6a575081929360009262000a5e575b50508160011b916000199060031b1c191617600255565b01519050388062000a47565b6002600052601f198316949091906000805160206200489c833981519152926000905b87821062000ac857505083600195961062000aae575b505050811b01600255565b015160001960f88460031b161c1916905538808062000aa3565b8060018596829496860151815501950193019062000a8d565b62000aeb62000085565b62000a13565b606081019062000b05602083510151151590565b1562000bf05762000bea620001969262000bdb92608062000b25620007a9565b82516001600160a01b031681529260208381015161ffff1916908501526040838101516001600160a01b0316908501528051606085015260c060a0840193845184870152015160a085015260a08151015160c085015260608151015160e085015260c08151015161010085015280515161012085015251015161014083015280515161016083015251515161018082015262000bc16003600055565b62000bcb43600155565b6040519283916020830162000897565b03601f19810183528262000142565b620009fe565b62000c569150600080808062000c1c62000c10865160018060a01b031690565b6001600160a01b031690565b60c08601519082821562000c7f575bf11562000c6f575b6040810151815160a0909201515151916001600160a01b03908116911662000c91565b6000805562000c656000600155565b620001966200072a565b62000c79620006c7565b62000c33565b506108fc62000c2b565b156200008057565b6000809162000196948262000d3495604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815262000cd58162000126565b5193165af13d1562000d4a5762000d233d6001600160401b03811162000d3a575b6040519062000d10601f8201601f19166020018362000142565b81529182903d6000602084013e62000d72565b506020808251830101910162000d58565b62000c89565b62000d4462000085565b62000cf6565b62000d236060809262000d72565b908160209103126200008057518015158103620000805790565b1562000d7b5790565b80511562000d8b57805190602001fd5b60405163100960cb60e01b815260026004820152602490fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630a84e99f146102345780631548a30d1461022b5780631e93b0f11461022257806336e56ea5146102195780633702d0ce146102105780634ab9f8b314610207578063523df4f6146101fe578063544774a9146101f557806355c42a95146101ec578063582523cd146101e3578063672422c7146101da57806374623535146101d157806374ecfa44146101c857806374f16ec9146101bf5780637a2b54dc146101b65780637f0595e2146101ad57806383230757146101a4578063883513de1461019b57806392cf8bd514610192578063a579242414610189578063a855bc1014610180578063ab53f2c614610177578063b87939c71461016e578063bf7df9c314610165578063cd6637a81461015c578063f1b1259d146101535763f33c0dce0361000e5761014e610eb9565b61000e565b5061014e610ddd565b5061014e610d8d565b5061014e610d5b565b5061014e610cb7565b5061014e610c42565b5061014e610bac565b5061014e610b3d565b5061014e610aec565b5061014e610a9b565b5061014e610a7c565b5061014e6109d6565b5061014e610995565b5061014e610902565b5061014e610832565b5061014e610800565b5061014e610792565b5061014e6106a4565b5061014e610666565b5061014e610608565b5061014e6105a1565b5061014e61054b565b5061014e61050d565b5061014e610488565b5061014e61043e565b5061014e6102f9565b5060203660031901126102af576020604061024d61141e565b6102a381835161025c81610f5a565b845161026781610f82565b600081528152858101906102796114b7565b82526004358151526001825152518582510152610294611595565b90600082525186820152611bc7565b01511515604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b038116036102af57565b60409060031901126102af576004356102e9816102c0565b906024356102f6816102c0565b90565b50346102af5761043061012061030e366102d1565b9061031761141e565b91610390610387610326611237565b9260018060a01b0380951684526020948585019116815261038161037a61034b613966565b9561035a600360005414612dd0565b610373610365611011565b89808251830101910161196b565b50516102b4565b855161157c565b516102b4565b8383510161157c565b8181019060008251526000838351015280519160016103de6103d960405195866103bd8982019283611ba4565b03966103d1601f1998898101835282610fee565b519020611278565b611b9a565b6103e781610474565b0361043457509161040b6103d1610417936040955193865193849182019586611ba4565b03908101835282610fee565b01515b5191018190526040519081529081906020820190565b0390f35b925050505161041a565b50346102af5760003660031901126102af576020600354604051908152f35b50634e487b7160e01b600052602160045260246000fd5b6002111561047e57565b61048661045d565b565b50346102af5760203660031901126102af5760606104b96004356104ab816102c0565b6104b3611147565b506111b4565b604080519180516104c981610474565b835260208101511515602084015201516040820152f35b919091604080606083019480516104f681610474565b845260208101511515602085015201511515910152565b50346102af5760203660031901126102af5761043061053f600435610531816102c0565b610539611147565b5061137c565b604051918291826104e0565b5060203660031901126102af57602060a0600435610568816102c0565b6102a361057361141e565b809261057d611552565b90815190600180881b03169052858101906004825152518582510152610294611595565b506020806003193601126102af57806004356105bc816102c0565b6102a36105c761141e565b80926105d1611552565b80516001600160a01b03909216909152848101805160009052905181518601526105f9611595565b90600082525185820152611bc7565b50346102af5760203660031901126102af57610622611250565b506080610630600435611278565b6106646040805192805161064381610474565b84526020818101511515818601529101518051604085015201516060830152565bf35b5060003660031901126102af576020608061067f61141e565b6102a38161068b611595565b8581019060038251525115158582510152610294611595565b5060603660031901126102af5761043061078060c06004356106c5816102c0565b610779602435916106d5836102c0565b6106dd61141e565b9283916106e8611147565b9160018060a01b03809216835281602084019116815261074961073f604085019260443584526040519461071b86610f5a565b610723611147565b865260208601966107326114b7565b88525116855152516102b4565b602084510161157c565b5160408251015261075b825160059052565b518582510152610769611595565b9060008252516020820152611bc7565b0151151590565b60405191829182901515815260200190565b50346102af5760003660031901126102af576107ac61141e565b6003600054036107e7576101c06020916101006107d86107ca611011565b85808251830101910161196b565b01519182910152604051908152f35b60405163100960cb60e01b8152600e6004820152602490fd5b50346102af5760203660031901126102af5761043061053f600435610824816102c0565b61082c611147565b50611301565b506101c03660031901126102af5761084861141e565b6040519061085582610f5a565b60043582526101a03660231901126102af576108f6916108736110ba565b61087b613988565b815261088636613997565b6020820152610894366139e6565b60408201526108a236613a06565b60608201526108af613a38565b60808201526108bd366139c0565b60a08201526108cb36613a53565b60c08201526108d936613a9a565b60e08201526108e6613a45565b6101008201526020820152611bc7565b60405160008152602090f35b5060403660031901126102af576104306107806060600435610923816102c0565b61077961092e61141e565b8092610938611237565b6001600160a01b03918216815260243560208201908152604051919261095d83610f5a565b610965611237565b835260208301936109746114b7565b85525116825152516020825101526002825152518582510152610769611595565b5060003660031901126102af5760206102406109af61141e565b6102a3816109bb611595565b85810190600782515251151561010082510152610294611595565b50346102af5760203660031901126102af576004356109f4816102c0565b6109fc61141e565b90600360005403610a6357610430916001610a3a60e093610a2d610a1e611011565b6020808251830101910161196b565b50828060a01b0316611301565b51610a4481610474565b610a4d81610474565b1491018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b50346102af5760003660031901126102af576020600154604051908152f35b50346102af5760003660031901126102af57610ab561141e565b600360005403610ad3576101006020916101806107d86107ca611011565b60405163100960cb60e01b815260086004820152602490fd5b50346102af5760003660031901126102af57610b0661141e565b600360005403610b24576101606020916101406107d86107ca611011565b60405163100960cb60e01b8152600b6004820152602490fd5b50346102af5760203660031901126102af57600435610b5b816102c0565b610b6361141e565b90600360005403610b9357610430916001610a3a61014093610b86610a1e611011565b50828060a01b03166113cd565b60405163100960cb60e01b8152600a6004820152602490fd5b5060403660031901126102af57610430610780610220602435610bce816102c0565b610779610bd961141e565b8092610be3611237565b60043581526001600160a01b0391821660208201908152604051919290610c0983610f5a565b610c11611237565b83526020830193610c206114b7565b855251835152511660208251015260068251525160e082510152610769611595565b50346102af57600080600319360112610cb4578054610c5f611011565b906040519283918252602090604082840152835191826040850152815b838110610c9d57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610c7c565b80fd5b50346102af5760203660031901126102af576104306101e0600435610cdb816102c0565b610ce361141e565b90610cf2600360005414612df0565b610cfd610a1e611011565b506001600160a01b0316610d10816111b4565b51610d1a81610474565b610d2381610474565b600090600103610d515750610d396040916111b4565b01519182915b01526040519081529081906020820190565b9050918291610d3f565b50346102af5760203660031901126102af5761043061053f600435610d7f816102c0565b610d87611147565b506113cd565b50346102af5760003660031901126102af57610da761141e565b600360005403610dc45761018060209160e06107d86107ca611011565b60405163100960cb60e01b8152600c6004820152602490fd5b50346102af57610430610200610df2366102d1565b90610dfb61141e565b91610e3e610387610e0a611237565b9260018060a01b0380951684526020948585019116815261038161037a610e2f613966565b9561035a600360005414612e10565b818101906000825152600083835101528051916001610e6b6103d960405195866103bd8982019283611ba4565b610e7481610474565b03610eb05750604091610e979151906103d18451918261040b8882019586611ba4565b0151015191018190526040519081529081906020820190565b91505051610d39565b50346102af5760003660031901126102af57610ed361141e565b600360005403610ef0576101a060209160c06107d86107ca611011565b60405163100960cb60e01b8152600d6004820152602490fd5b90600182811c92168015610f39575b6020831014610f2357565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f18565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f7557604052565b610f7d610f43565b604052565b602081019081106001600160401b03821117610f7557604052565b606081019081106001600160401b03821117610f7557604052565b60e081019081106001600160401b03821117610f7557604052565b60a081019081106001600160401b03821117610f7557604052565b601f909101601f19168101906001600160401b03821190821017610f7557604052565b604051906000826002549161102583610f09565b808352600193808516908115611099575060011461104b575b5061048692500383610fee565b60026000908152600080516020613acb83398151915294602093509091905b81831061108157505061048693508201013861103e565b8554888401850152948501948794509183019161106a565b905061048694506020925060ff191682840152151560051b8201013861103e565b6040519061012082016001600160401b03811183821017610f7557604052565b6040519061026082016001600160401b03811183821017610f7557604052565b6040519061040082016001600160401b03811183821017610f7557604052565b604051906101a082016001600160401b03811183821017610f7557604052565b6040519061048682610f9d565b6040519061115482610f9d565b60006040838281528260208201520152565b6001600160a01b0316600090815260096020526040902090565b6001600160a01b0316600090815260086020526040902090565b6001600160a01b0316600090815260056020526040902090565b906111bd611147565b9160018060a01b03166000908082526005602052600160ff6040842054166111e481610474565b0361122c576040929350815260056020522060016040519161120583610f9d565b60ff815481811661121581610474565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061124482610f5a565b60006020838281520152565b6040519061125d82610f9d565b8160008152600060208201526040611273611237565b910152565b90611281611250565b916000908082526006602052600160ff6040842054166112a081610474565b0361122c5760409293508152600660205220604051906112bf82610f9d565b60ff81548181166112cf81610474565b845260081c16151560208301526002604051916112eb83610f5a565b6001810154835201546020820152604082015290565b9061130a611147565b9160018060a01b03166000908082526007602052600160ff60408420541661133181610474565b0361122c576040929350815260076020522060ff6040519161135283610f9d565b5481811661135f81610474565b8352818160081c161515602084015260101c161515604082015290565b90611385611147565b9160018060a01b03166000908082526008602052600160ff6040842054166113ac81610474565b0361122c576040929350815260086020522060ff6040519161135283610f9d565b906113d6611147565b9160018060a01b03166000908082526009602052600160ff6040842054166113fd81610474565b0361122c576040929350815260096020522060ff6040519161135283610f9d565b6114266110da565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b604051906114b182610f82565b60008252565b6040519061012082016001600160401b03811183821017611545575b6040526000610100838281526040516114eb81610f82565b83815260208201526040516114ff81610f82565b838152604082015261150f611237565b60608201528260808201526115226114a4565b60a082015261152f611147565b60c082015261153c611237565b60e08201520152565b61154d610f43565b6114d3565b6040519061155f82610f5a565b8160405161156c81610f82565b60008152815260206112736114b7565b6001600160a01b039091169052565b6008111561047e57565b604051906115a282610f5a565b816000815260206112736114b7565b604051906115be82610fb8565b8160c06000918281528260208201526040516115d981610f5a565b6115e1611237565b815283602082015260408201528260608201528260808201528260a08201520152565b6040519061161182610f82565b8160005b60208110611621575050565b60209061162c611147565b8184015201611615565b61163e6110fa565b906116476114a4565b82526116516115b1565b602083015261165e6114a4565b604083015261166b6115b1565b6060830152611678611237565b60808301526116856115b1565b60a08301526116926115b1565b60c083015261169f6114a4565b60e08301526116ac6115b1565b6101008301526116ba611147565b610120830152600061014083015260006101608301526116d8611237565b6101808301526116e6611237565b6101a08301526116f4611237565b6101c0830152611702611237565b6101e083015260006102008301526117186115b1565b610220830152611726611237565b610240830152600061026083015261173c611237565b61028083015261174a611237565b6102a0830152611758611237565b6102c0830152611766611237565b6102e0830152611774611147565b610300830152611782611604565b6103208301526117906115b1565b61034083015261179e6115b1565b6103608301526117ac611604565b6103808301526117ba6115b1565b6103a08301526117c86115b1565b6103c08301526117d66115b1565b6103e0830152565b5190610486826102c0565b519061ffff19821682036102af57565b801515036102af57565b8092910391606083126102af576040519061181d82610f5a565b60408294126102af576040602091815161183681610f5a565b8151815283820151848201528452015191611850836117f9565b0152565b919091610120818403126102af576040519060c0906101009060e084016001600160401b038111858210176118d5575b6040526118ac849682518652602083015161189e816117f9565b602087015260408301611803565b604085015260a0810151606085015282810151608085015260e081015160a08501520151910152565b6118dd610f43565b611884565b91908260609103126102af576040516118fa81610f9d565b60408082948051845260208101516020850152015191611850836117f9565b9080601f830112156102af576040519161193283610f82565b82606092838301928184116102af57915b83831061195257505050505090565b6020859161196084866118e2565b815201920191611943565b90610320828203126102af5761030061198261111a565b9261198c816117de565b845261199a602082016117e9565b60208501526119ab604082016117de565b60408501526119bd8360608301611854565b6060850152611a29610180936119d581868501611919565b60808701526101e083015160a087015261020083015160c087015261022083015160e08701526102408301516101008701526102608301516101208701526102808301516101408701526102a083016118e2565b61016085015201519082015290565b6101c060206104869395946101e084019660018060a01b03168452805182850152015180516008811015611b26575b60408401526020810151516001600160a01b031660608401526040810151516080840152606081015180516001600160a01b031660a08501526020015160c08401526080810151151560e084015260a0810151516001600160a01b0316610100848101919091529060c081015180516001600160a01b039081166101208701526020820151166101408601526040015161016085015260e08101518051610180860152602001516001600160a01b03166101a085015201511515910152565b611b2e61045d565b611a67565b516008811015611b405790565b6102f661045d565b516001600160a01b031690565b60405190611b6282610fb8565b600060c083828152826020820152826040820152611b7e6115b1565b6060820152826080820152611b91611604565b60a08201520152565b516102f681610474565b81516001600160a01b039081168252602092830151169181019190915260400190565b90611bd0611636565b611bde600360005414612e30565b6020611bf9611beb611011565b82808251830101910161196b565b93611c15611c10611c0c60045460ff1690565b1590565b612e50565b7f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac260405180611c45843383611a38565b0390a1611c5d81518015908115612d61575b50612e70565b01611c688151611b33565b611c718161158b565b611e3d579260a0916020610486955101518152611c96611c9183516102b4565b6102b4565b3303611e1d57611ca6600161314e565b611cb0341561316e565b600060206040840195611cd4611ccf611cc989516102b4565b33613300565b61318e565b611d0b611cfe611ce48651611b48565b6001600160a01b0316600090815260076020526040902090565b805460ff19166001179055565b611d27611d1b611ce48651611b48565b805462ff000019169055565b604051600081527fac9642c1b6d09447ba5470a31a0e05f48671224db42e0bf23e8734834469790c90602090a101526020610120830151910190815152604060608301611d87611d7b602083510151151590565b60208551019015159052565b51015160408251015260e082015160608251015261014082015160808251015260c0820151838251015261010082015160c082510152611dfc611df3611dcb611b55565b95611ddf611dd986516102b4565b8861157c565b60208581015161ffff191690880152610381565b6040860161157c565b516060840152436080840152608081015182840152015160c08201526137ea565b611ca66001611e2e6103d933611301565b611e3781610474565b1461314e565b6001611e498251611b33565b611e528161158b565b036120185792611fe860a0926040610486965101519060408101918252611e7c611c9185516102b4565b3303611ff857611e8c60016130ee565b611e96341561310e565b6000604080860197611ebd611eb8611eae8b516102b4565b875151903361335b565b61312e565b8151600081527f06984f459823fb1b7dc36ec2344738b806910a6186c7ca1295fb04779d54e5b490602090a101526060611eff61012086015184515190612da7565b910190815152604060608501611f1c611d7b602083510151151590565b51015160408251015260e084015160608251015261014084015160808251015260c0840151858251015261010084015160c082510152611f91611f88611f60611b55565b97611f74611f6e88516102b4565b8a61157c565b60208781015161ffff1916908a0152610381565b6040880161157c565b5160608601524360808601526080830151906101808401519051510190611fe3610160850151611fc960406020830151920151151590565b90611fd261113a565b948552602085015215156040840152565b6133c5565b82840152015160c08201526137ea565b611e8c60016120096103d933611301565b61201281610474565b146130ee565b60026120248251611b33565b61202d8161158b565b03612142579260a0916000606080610486975101519560808401968752612057611c9186516102b4565b3314831461212257612069600161306e565b61207f602088510151610180870151101561308e565b61208934156130ae565b60408501966120a361209e611cc98a516102b4565b6130ce565b6120b8611cfe6120b38351611b48565b61119a565b5160016120cd6120b3602084015193516102b4565b0155604051600081527f3be412f55a649d60febf7d9465b92050e7850d2b0cf0181a8beea7ab6806d1b590602090a1015282610120830151910190815152604060608301611d87611d7b602083510151151590565b61206960016121336103d933611301565b61213c81610474565b1461306e565b600361214e8251611b33565b6121578161158b565b0361223657506104869260a09161217f33600180861b0361217885516102b4565b161461300e565b612189341561302e565b6000608060408401956121a76121a2611cc989516102b4565b61304e565b604051600081527fea159df85fd34a509b41bc67bc96d18262c19d7862e2b0db7c05559511d2cdee90602090a1015260c0610120830151910190815152600060208251015260406060830151015160408251015260e082015160608251015261014082015160808251015260c0820151838251015261010082015160c082510152611dfc611df3611dcb611b55565b60046122428251611b33565b61224b8161158b565b03612354579260a09160008380610486975101519560e0840196875261227e612277611c9187516102b4565b3314612fb0565b6122883415612fce565b826122af611ce460408801996122a96122a4611cc98d516102b4565b612fee565b51611b48565b55604051600081527f078b8f599f9837641d970cfbd196f8477cb185b4e7ac6f396f5f6c740418f30690602090a101526101208201519061010080910191825152604060608401612313612307602083510151151590565b60208651019015159052565b51015160408351015260e083015160608351015261014083015160808351015260c0830151848351015282015160c082510152611dfc611df3611dcb611b55565b60056123638294939451611b33565b61236c8161158b565b0361274e579260a09161262060c08061048697510151926123a460406101209580878b01520151858701511061014089019015159052565b6123d260016123c36103d96123be611c91898d0151611b48565b6113cd565b6123cc81610474565b14612f50565b610140870151156127475760408488015101515b6101608801526123f63415612f70565b61241b61241661240960408801516102b4565b6101608a0151903361335b565b612f90565b61257061242a85890151611b48565b61243a6101808a0191825161157c565b61245661244c6020888c015101611b48565b602083510161157c565b600161255e6101a08b01600081515260006020825101528351908361249e6103d9604051948561248a602082019283611ba4565b03956103d1601f1997888101835282610fee565b6124a781610474565b03612741575060406124d4855182516103d1816124c8602082019485611ba4565b03868101835282610fee565b01515b6125028d60408c60206101c084019580875251956101e0850196875152510151920151015190612da7565b602082510152612544611cfe865160405161253181612525602082019485611ba4565b03878101835282610fee565b5190206000526006602052604060002090565b51935190612531604051918261040b602082019586611ba4565b01906020600191805184550151910155565b612582611cfe6120b3868a0151611b48565b600161259e6103d9612599611c91888c0151611b48565b6111b4565b6125a781610474565b03612737576125d460406125c3612599611c91888c0151611b48565b01515b6040868a0151015190612da7565b60016125e56120b3878b0151611b48565b0155604051600181527ff13112d9a89a026b674e660703eda3014b599d23512a875af42eca8b93791d239080602081015b0390a10160019052565b610140840151156127295781810151908401516040015161264091612da7565b6102008401525b611fe86102008401519361022081019485515260406060840161267d612671602083510151151590565b60208951019015159052565b51015160408651015260e083015160608651015261014083015160808651015260c0830151848651015261010083015160c0865101526126bb611b55565b946126cf6126c985516102b4565b8761157c565b60208481015161ffff1916908701526126ee611f8860408601516102b4565b5160608601524360808601526080830151906101606101808501519101510190611fe3610160850151611fc960406020830151920151151590565b810151610200840152612647565b6125d460006125c6565b516124d7565b60006123e6565b600661275a8251611b33565b6127638161158b565b03612ca2575160e0015161024083019081529160016127846103d9336111b4565b61278d81610474565b03612c9a57604061279d336111b4565b0151915b6102608201928352835151936127bf61018087019586511015612ed0565b6127ce84518251511115612ef0565b6127d83415612f10565b61290261022060408801936127f86127f3611cc987516102b4565b612f30565b6128cf610280870161280b33825161157c565b61281b61244c6020885101611b48565b600161255e6102a08a01600081515260006020825101528a89855192856128656103d96040519687612851602082019283611ba4565b03976103d1601f19998a8101835282610fee565b61286e81610474565b03612c8657506020612502916102e06128bd60406128a68b5182516103d18161289a8a82019485611ba4565b038c8101835282610fee565b0151925b6102c08701938085525190515190612da7565b9401938451525101518b515190612dbb565b604051600181527f5e8733e2cb6a50e426697807de1faebf49ce49167a090604911ed9a937d10f62908060208101612616565b61030083019461291333875161157c565b8151516020875101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce2361299760208901976129646129558a5161ffff191690565b60408351019061ffff19169052565b516040805182516001600160a01b03168152602080840151908201529181015161ffff1916908201529081906060820190565b0390a160016129a86103d93361137c565b6129b181610474565b03612b6e576129e29060808801519051835151900390611fe36101608a0151611fc960406020830151920151151590565b936103808401948552612a036129f884516102b4565b8351519033906131ae565b8051612b1f575091612b02612af960a09593612a8a6104869996612a35612a293361119a565b60016000918281550155565b6103a0612a4a6101208a015183515190612dbb565b960195865152604060608901612a73612a67602083510151151590565b60208a51019015159052565b51015160408751015260e088015190515190612da7565b606085510152610140860151608085510152612aa960c0870151612d84565b8785510152612abc610100870151612d84565b60c085510152610381612aed612ad0611b55565b99612ae4612ade8a516102b4565b8c61157c565b5161ffff191690565b61ffff191660208a0152565b6040870161157c565b5160608501524360808501525182840152015160c08201526137ea565b612af960a09593612a8a610486999694612b4c612b0295612b42611cfe3361119a565b5182515190612dbb565b6001612b573361119a565b01556103c0612a4a6101208a015183515190612dbb565b612bb290612b7e611cfe33611180565b612b8a611d1b33611180565b60808801519051835151900390611fe36101608a0151611fc960406020830151920151151590565b936103208401948552612bc86129f884516102b4565b8051612c41575091612b02612af960a09593612c036104869996612bee612a293361119a565b610340612a4a6101208a015183515190612dbb565b606085510152610140860151608085510152612c2260c0870151612d84565b878551015261010086015160c085510152610381612aed612ad0611b55565b612af960a09593612c03610486999694612c64612b0295612b42611cfe3361119a565b6001612c6f3361119a565b0155610360612a4a6101208a015183515190612dbb565b612502916102e06128bd60209351926128aa565b6000916127a1565b612cb160079193929351611b33565b612cba8161158b565b14612cc457505050565b6104869260a091612cd53415612e90565b60006102406040840195612cf4612cef611cc989516102b4565b612eb0565b612d00611cfe33611166565b612d0c611d1b33611166565b604051600081527fd2c4a5d706d1226ed468054fae98e8814d998076e336e12d0919e676188d678c90602090a101526103e0610120830151910190815152604060608301611d87611d7b602083510151151590565b90506001541438611c57565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111612d9a575b82106102af57565b612da2612d6d565b612d92565b9190820191828111612d9a5782106102af57565b908103908111612dc85790565b6102f6612d6d565b15612dd757565b60405163100960cb60e01b815260096004820152602490fd5b15612df757565b60405163100960cb60e01b8152600f6004820152602490fd5b15612e1757565b60405163100960cb60e01b815260106004820152602490fd5b15612e3757565b60405163100960cb60e01b815260146004820152602490fd5b15612e5757565b60405163100960cb60e01b815260156004820152602490fd5b15612e7757565b60405163100960cb60e01b815260166004820152602490fd5b15612e9757565b60405163100960cb60e01b8152602e6004820152602490fd5b15612eb757565b60405163100960cb60e01b8152602f6004820152602490fd5b15612ed757565b60405163100960cb60e01b8152602a6004820152602490fd5b15612ef757565b60405163100960cb60e01b8152602b6004820152602490fd5b15612f1757565b60405163100960cb60e01b8152602c6004820152602490fd5b15612f3757565b60405163100960cb60e01b8152602d6004820152602490fd5b15612f5757565b60405163100960cb60e01b815260276004820152602490fd5b15612f7757565b60405163100960cb60e01b815260286004820152602490fd5b15612f9757565b60405163100960cb60e01b815260296004820152602490fd5b15612fb757565b602460405163100960cb60e01b8152816004820152fd5b15612fd557565b60405163100960cb60e01b815260256004820152602490fd5b15612ff557565b60405163100960cb60e01b815260266004820152602490fd5b1561301557565b60405163100960cb60e01b815260216004820152602490fd5b1561303557565b60405163100960cb60e01b815260226004820152602490fd5b1561305557565b60405163100960cb60e01b815260236004820152602490fd5b1561307557565b60405163100960cb60e01b8152601d6004820152602490fd5b1561309557565b60405163100960cb60e01b8152601e6004820152602490fd5b156130b557565b60405163100960cb60e01b8152601f6004820152602490fd5b156130d557565b60405163100960cb60e01b815260206004820152602490fd5b156130f557565b60405163100960cb60e01b8152601a6004820152602490fd5b1561311557565b60405163100960cb60e01b8152601b6004820152602490fd5b1561313557565b60405163100960cb60e01b8152601c6004820152602490fd5b1561315557565b60405163100960cb60e01b815260176004820152602490fd5b1561317557565b60405163100960cb60e01b815260186004820152602490fd5b1561319557565b60405163100960cb60e01b815260196004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261322a93600093849392849190608081016001600160401b03811182821017613231575b6040525193165af161321a61321361323e565b80926132a0565b506020808251830101910161328b565b156102af57565b613239610f43565b613200565b3d15613286573d906001600160401b038211613279575b6040519161326d601f8201601f191660200184610fee565b82523d6000602084013e565b613281610f43565b613255565b606090565b908160209103126102af57516102f6816117f9565b156132a85790565b8051156132b757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156132d85790565b8051156132e757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60006102f6928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261334481610fd3565b5193165af161321a61335461323e565b80926132d0565b6000916102f69383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261334481610fd3565b9060018110156133af5760051b0190565b634e487b7160e01b600052603260045260246000fd5b91906133cf611604565b9260005b600181106133e15750508252565b806133ee6001928461339e565b516133f9828861339e565b52613404818761339e565b506000198114613415575b016133d3565b61341d612d6d565b61340f565b506040513d6000823e3d90fd5b81811061343a575050565b6000815560010161342f565b613451600254610f09565b806134595750565b601f811160011461346c57506000600255565b60026000526134b190601f0160051c600080516020613acb833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61342f565b6000602081208160025555565b604051906101a082016001600160401b03811183821017613546575b604052816101806000918281528260208201528260408201526134fb6115b1565b6060820152613508611604565b60808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015261353c611147565b6101608201520152565b61354e610f43565b6134da565b60c061010091805184526020810151151560208501526020604082015161358860408701825160208091805184520151910152565b015115156080850152606081015160a085015260808101518285015260a081015160e08501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b600182106135e257505050565b60206060826135f460019487516135b5565b019301910190916135d5565b81516001600160a01b03168152610320810192916103009060208181015161ffff1916908401526040818101516001600160a01b03169084015261364c60608201516060850190613553565b60808101519061366261018092838601906135d0565b60a08101516101e085015260c081015161020085015260e08101516102208501526101008101516102408501526101208101516102608501526101408101516102808501526136bb6101608201516102a08601906135b5565b0151910152565b90601f82116136cf575050565b6104869160026000526020600020906020601f840160051c830193106136fd575b601f0160051c019061342f565b90915081906136f0565b80519091906001600160401b0381116137dd575b61372f8161372a600254610f09565b6136c2565b602080601f831160011461376b5750819293600092613760575b50508160011b916000199060031b1c191617600255565b015190503880613749565b6002600052601f19831694909190600080516020613acb833981519152926000905b8782106137c55750508360019596106137ac575b505050811b01600255565b015160001960f88460031b161c191690553880806137a1565b8060018596829496860151815501950193019061378d565b6137e5610f43565b61371b565b60608101906137fd602083510151151590565b156138e0576138db610486926138cd9260806138176134be565b9261382b61382584516102b4565b8561157c565b60208381015161ffff19169085015261384a611df360408501516102b4565b8051606085015260c060a0840193845184870152015160a085015260a08151015160c085015260608151015160e085015260c0815101516101008501528051516101208501525101516101408301528051516101608301525151516101808201526138b56003600055565b6138be43600155565b60405192839160208301613600565b03601f198101835282610fee565b613707565b61393a915060008080806138f7611c9186516102b4565b60c08601519082821561395d575bf115613950575b61391960408201516102b4565b60a061392583516102b4565b9201515151916001600160a01b0316906131ae565b600080556139486000600155565b610486613446565b613958613422565b61390c565b506108fc613905565b6040519061397382610f5a565b8161397c611237565b81526020611273611237565b6024359060088210156102af57565b60209060431901126102af57604051906139b082610f82565b604435826139bd826102c0565b52565b60209060e31901126102af57604051906139d982610f82565b60e435826139bd826102c0565b60209060631901126102af57604051906139ff82610f82565b6064358252565b60409060831901126102af5760405190613a1f82610f5a565b81608435613a2c816102c0565b8152602060a435910152565b60c43590610486826117f9565b6101a43590610486826117f9565b6060906101031901126102af5760405190613a6d82610f9d565b8161010435613a7b816102c0565b815261012435613a8a816102c0565b6020820152604061014435910152565b6040906101631901126102af5760405190613ab482610f5a565b61016435825261018435602083611850836102c056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 18620,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './token.rsh:338:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './token.rsh:81:37:after expr stmt semicolon',
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
