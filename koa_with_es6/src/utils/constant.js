export const CLIENT_TYPE = {
    WECHAT: 'WECHAT',
    IOS: 'IOS',
    ANDROID: 'ANDROID'
}

export const APP_TYPE = {
    APP: 'APP',
    WECHAT: 'WECHAT'
}

export const REDIS_KEY = {
    WECHAT_API_ACCESS_TOKEN: 'wechat_api:access_token',
    WECHAT_API_TICKET_TOKEN: 'wechat_api:ticket_token',
    WECHAT_OAUTH_ACCESS_TOKEN: 'wechat_oauth:access_token',
    MOBILE_VERIFICATION_CODE_CHECK: 'mobile_verification_code_check',
    PWD_CREATE_TOKEN_CHECK: 'pwd_create_token_check',
    MOBILE_CHANGE_TOKEN_CHECK: 'mobile_change_token_check',
    COMMON_TOKEN_CHECK: 'common_token_check',
    PAY_EXTRA: 'pay_extra'
}

export const IOU_STATUS = {
    CREATED: 'CREATED',     // 已创建
    CONFIRMED: 'CONFIRMED', // 已确认
    REFUSED: 'REFUSED',     // 已驳回
    UNDER_REVIEW: 'UNDER_REVIEW', // 待审核
    REVIEW_REJECTED: 'REVIEW_REJECTED', // 审核已拒绝
    UNDER_FNC_REVIEW: 'UNDER_FNC_REVIEW', // 待财务确认
    UNDER_BOW_CONFIRM: 'UNDER_BOW_CONFIRM', // 待借款人确认
    LENDING: 'LENDING',     // 生效中
    REPAID: 'REPAID',       // 已还清
    CANCELED: 'CANCELED'   // 已删除
}

export const IOU_EXTENSION_STATUS = {
    CREATED: 'CREATED',
    CANCELED: 'CANCELED',
    ACCEPTED: 'ACCEPTED',
    REFUSED: 'REFUSED'
}

export const USER_TRANSACTION_TYPE = {
    CHARGE: 'CHARGE',
    WITHDRAW: 'WITHDRAW',
    REPAY: 'REPAY',
    BORROW: 'BORROW',
    IOU_CREATE: 'IOU_CREATE',
    IOU_CANCEL: 'IOU_CANCEL',
    IOU_EXTENSION_CREATE: 'IOU_EXTENSION_CREATE',
    IOU_EXTENSION_CANCEL: 'IOU_EXTENSION_CANCEL'
}

export const USER_TRANSACTION_STATUS = {
    CREATED: 'CREATED',
    CONFIRMED: 'CONFIRMED',
    CANCELED: 'CANCELED'
}

export const GROUP_FINANCIAL_TRANSACTION_TYPE = {
    CHARGE: 'CHARGE',
    LEND: 'LEND',
    REPAY: 'REPAY',
    EXTEND: 'EXTEND',
    IOU_CREATE: 'IOU_CREATE',
    IOU_CANCEL: 'IOU_CANCEL',
    EXTENSION_CREATE: 'EXTENSION_CREATE'
}

export const GROUP_FINANCIAL_TRANSACTION_STATUS = {
    CREATED: 'CREATED',
    CONFIRMED: 'CONFIRMED'
}

export const USER_SEX_TYPE = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    UNKNOWN: 'UNKNOWN'
}

export const VERIFICATION_CODE_USAGE_TYPE = {
    SIGNIN_BY_MOBILE: 'SIGNIN_BY_MOBILE',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_MOBILE: 'SET_MOBILE',
    CHECK_USER_REAL: 'CHECK_USER_REAL',
    BIND_CARD: 'BIND_CARD'
}

export const PASSWORD_USAGE_TYPE = {
    SET_MOBILE: 'SET_MOBILE'
}

export const PUT_ACTION = {
    IOU: {
        CANCEL: 'CANCEL',
        CHANGE: 'CHANGE',
        CONFIRM: 'CONFIRM',
        ACCEPT: 'ACCEPT',
        REFUSE: 'REFUSE',
        DELETE: 'DELETE'
    },
    IOU_EXTENSION: {
        CANCEL: 'CANCEL',
        ACCEPT: 'ACCEPT',
        REFUSE: 'REFUSE'
    },
    IOU_REPAYMENT: {
        ACCEPT: 'ACCEPT',
        REFUSE: 'REFUSE'
    },
    NOTICE: {
        VIEW: 'VIEW'
    },
    COMPLAINT: {
        CANCEL: 'CANCEL'
    }
}

export const SEARCH_TYPE = {
    IOU: {
        NEED_REPAY: 'NEED_REPAY',
        NEED_COLLECT: 'NEED_COLLECT',
        ALL: 'ALL',
        NOT_IN_EFFECT: 'NOT_IN_EFFECT',
        NEED_CONFIRM: 'NEED_CONFIRM',
        NEED_ACCEPT: 'NEED_ACCEPT',
        IN_EFFECT: 'IN_EFFECT',
        BE_OVERDUE: 'BE_OVERDUE',
        BE_REPAID: 'BE_REPAID'
    },
    CREDIT_DETAIL: {
        AS_LENDER: 'AS_LENDER',
        AS_BORROWER: 'AS_BORROWER',
        BE_OVERDUE: 'BE_OVERDUE'
    }
}

export const CONFIG_KEY = {
    MAX_INTEREST_RATE: 'MAX_INTEREST_RATE',
    MIN_INTEREST_RATE: 'MIN_INTEREST_RATE',
    DEFAULT_LEND_DAYS: 'DEFAULT_LEND_DAYS',
    DEFAULT_EXTEND_DAYS: 'DEFAULT_EXTEND_DAYS',
    IOU_CREATE_FEE: 'IOU_CREATE_FEE',
    IOU_EXTENSION_CREATE_FEE: 'IOU_EXTENSION_CREATE_FEE',
    MAX_IOU_AMOUNT: 'MAX_IOU_AMOUNT',
    DEFAULT_QUOTA: 'DEFAULT_QUOTA',
    REMARK_MAX_LENGTH: 'REMARK_MAX_LENGTH',
    IOS: 'IOS',
    ANDROID: 'ANDROID',
    CUSTOMER_HOTLINE: 'CUSTOMER_HOTLINE',
    CUSTOMER_WECHAT: 'CUSTOMER_WECHAT',
    CUSTOMER_QQ: 'CUSTOMER_QQ',
    COMPLAINT_IMG_STYLE: 'COMPLAINT_IMG_STYLE',
    TEST_ACCOUNT: 'TEST_ACCOUNT',
    SHOW_EDIT_IOUS_BTN: 'SHOW_EDIT_IOUS_BTN',
    DEFAULT_IOU_END_TIME: 'DEFAULT_IOU_END_TIME',
    DEFAULT_IOU_EXTEND_TIME: 'DEFAULT_IOU_EXTEND_TIME',
    SYS_MSG: 'SYS_MSG',
    CHARGE: 'CHARGE',
    WITHDRAW: 'WITHDRAW',
    WITHDRAW_FEE: 'WITHDRAW_FEE'
}

export const AMD_CONFIG_KEY = {
    GROUP_CONFIG_DEFAULT: 'GROUP_CONFIG_DEFAULT'
}

export const NOTICE_TYPE = {
    IOU_LENDING: 1,
    IOU_REFUSED: 2,
    IOU_REVIEW_REJECTED: 3,
    IOU_EXTENSION_ACCEPTED: 4,
    IOU_BE_OVERDUE: 5,
    IOU_REPAID: 6
}

export const SMS_MSG_TEMPLATE_CODE = {
    VERIFICATION_CODE: ''
}

export const TMP_MSG_TEMPLATE_ID = {
    IOU: '',
    IOU_EXTENSION: '',
    IOU_COMPLAINT: ''
}

export const ROLE = {
    LENDER: 'LENDER',
    BORROWER: 'BORROWER'
}

export const COMPLAINT_STATUS = {
    CREATED: 'CREATED',
    CANCELED: 'CANCELED',
    FINISHED: 'FINISHED'
}

export const PUSH_TYPE = {
    MESSAGE: 'MESSAGE',
    NOTICE: 'NOTICE'
}

export const USER_WECHAT_STATUS = {
    CREATED: 'CREATED',
    DELETED: 'DELETED'
}

export const USER_TYPE = {
    LENDER: 'LENDER',
    BORROWER: 'BORROWER'
}

export const USER_STATUS = {
    ENABLED: 'ENABLED',
    DISABLED: 'DISABLED'
}

export const GROUP_STATUS = {
    ENABLED: 'ENABLED',
    DISABLED: 'DISABLED',
    DELETED: 'DELETED'
}

export const CHANNEL_STATUS = {
    ENABLED: 'ENABLED',
    DISABLED: 'DISABLED'
}

export const CHANNEL_LENDERS_STATUS = {
    CREATED: 'CREATED',
    DELETED: 'DELETED'
}

export const BANK_CARD_STATUS = {
    CREATED: 'CREATED',
    DELETED: 'DELETED'
}

export const ALIPAY_STATUS = {
    CREATED: 'CREATED',
    DELETED: 'DELETED'
}

export const SYS_GROUP_ID = 1

export const AUTO_IOU_DEFAULT = {
    INTEREST_RATE: 24,
    USAGE_TYPE_ID: 9
}

export const AUTH_REVIEW_RESULT = {
    REFUSED: 'REFUSED'
}

export const ME_STATUS = {
    REFUSED: 'REFUSED',
    TOAUTH: 'TOAUTH',
    CONFIRMING: 'CONFIRMING',
    UNDER_BOW_CONFIRM: 'UNDER_BOW_CONFIRM',
    LENDING: 'LENDING',
    RELOAN: 'RELOAN',
    APPLY: 'APPLY'
}

export const USER_APPLY = {
    TYPE: {
        RELOAN: 'RELOAN',
        APPLY: 'APPLY'
    },
    STATUS: {
        CREATED: 'CREATED',
        CONFIRMED: 'CONFIRMED'
    }
}

export const AUTH_STATUS = {
    NONE: 'NONE',
    EXPIRE: 'EXPIRE',
    VALIDATE: 'VALIDATE'
}