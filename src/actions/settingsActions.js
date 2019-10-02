import {DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION} from './types';

export const setDisableBalanceOnAdd = () => {
    // Get settings from LS

    const settings = JSON.parse(localStorage.getItem('settings'));

    // toggle

    settings.disabledBalanceOnAdd = !settings.disabledBalanceOnAdd

    // ASet back to LS

    localStorage.setItem('settings', JSON.stringify(settings))
    return {
        type: DISABLE_BALANCE_ON_ADD,
        payload: settings.disabledBalanceOnAdd
    }
}

export const setDisableBalanceOnEdit = () => {
    // Get settings from LS

    const settings = JSON.parse(localStorage.getItem('settings'));

    // toggle

    settings.disabledBalanceOnEdit = !settings.disabledBalanceOnEdit

    // ASet back to LS

    localStorage.setItem('settings', JSON.stringify(settings))
    return {
        type: DISABLE_BALANCE_ON_EDIT,
        paylaod: settings.disabledBalanceOnEdit
    }
}

export const setAllowRegistration = () => {
   // Get settings from LS

   const settings = JSON.parse(localStorage.getItem('settings'));

   // toggle

   settings.allowRegistration = !settings.allowRegistration

   // ASet back to LS

   localStorage.setItem('settings', JSON.stringify(settings))

    return {
        type: ALLOW_REGISTRATION,
        payload: settings.allowRegistration
    }
}
