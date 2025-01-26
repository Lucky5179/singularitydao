"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [699],
  {
    85844: function (e, n, t) {
      t.d(n, {
        AX: function () {
          return s;
        },
      });
      var a = t(52322);
      t(2784);
      var i = t(97680),
        p = t.n(i),
        u = t(92677);
      let s = (e) =>
        (0, a.jsx)(p(), {
          animationData: u,
          style: {
            height: (null == e ? void 0 : e.height) || 16,
            width: null == e ? void 0 : e.width,
          },
        });
    },
    45114: function (e, n, t) {
      var a, i;
      t.d(n, {
        S: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).TOKEN_SUPPLY = "tokenSupply"),
        (i.TVL_PRICE = "tvlPrice"),
        (i.TOKEN_LOCKED = "tokenLocked"),
        (i.WHITELIST = "whitelist"),
        (i.WHITELIST_CLAIM = "whitelist_claim"),
        (i.TOTAL_SDAO_LOCKED = "totalSdaoLocked"),
        (i.LAUNCHPAD_INTEREST = "load_launchpad_interest"),
        (i.KYC_STATUS = "kyc_status"),
        (i.PROJECT_LIST = "PROJECT_LIST"),
        (i.TIER_POOL_LIST = "TIER_POOL_LIST"),
        (i.CHAIN_BLOCK = "CHAIN_BLOCK"),
        (i.PROJECT_DEPOSIT_DETAILS = "PROJECT_DEPOSIT_DETAILS"),
        (i.STAKING_POOL_LIST = "STAKING_POOL_LIST"),
        (i.STAKING_POOL_USER_INFO = "STAKING_POOL_USER_INFO"),
        (i.STAKING_DEPOSIT_CALC_INFO = "STAKING_DEPOSIT_CALC_INFO"),
        (i.STAKING_PROJECT_DETAILS = "STAKING_PROJECT_DETAILS"),
        (i.STAKING_EXTEND_CALC_INFO = "STAKING_EXTEND_CALC_INFO"),
        (i.STAKING_WITHDRAW_CALC_INFO = "STAKING_WITHDRAW_CALC_INFO"),
        (i.WALLET_SREP = "WALLET_SREP"),
        (i.STAKING_PROJECT = "STAKING_PROJECT");
    },
    39389: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endOfEpochBlock","type":"uint256"}],"name":"ExtendPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":true,"internalType":"contract IERC20","name":"lpToken","type":"address"}],"name":"LogPoolAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"}],"name":"LogUpdatePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"tokenPerBlock","type":"uint256"},{"internalType":"uint256","name":"lpSupply","type":"uint256"},{"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"endOfEpochBlock","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalRewardsReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"int256","name":"rewardDebt","type":"int256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_sdaoPerBlock","type":"uint256"},{"internalType":"uint256","name":"_endOfEpochBlock","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_sdaoPerBlock","type":"uint256"},{"internalType":"uint256","name":"_endOfEpochBlock","type":"uint256"}],"name":"extendPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"sdaoPerBlock","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256[]","name":"pids","type":"uint256[]"}],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"withdrawAndHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdrawETHAndAnyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]'
      );
    },
  },
]);
