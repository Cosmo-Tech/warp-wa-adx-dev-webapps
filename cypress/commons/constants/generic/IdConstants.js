// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.
export const GENERIC_SELECTORS = {
  login: {
    microsoftLoginButton: '[data-cy=sign-in-with-microsoft-button]',
    devLoginButton: '[data-cy=sign-in-with-dev-account-button]',
  },
  accessDenied: {
    errorMessage: '[data-cy=access-denied-error-message]',
  },
  userInfoMenu: {
    button: '[data-cy=user-profile-menu]',
    popover: '[data-cy=main-menu]',
    logout: '[data-cy=logout]',
    language: {
      change: '[data-cy=change-language]',
      en: '[data-cy=set-lang-en]',
      fr: '[data-cy=set-lang-fr]',
    },
  },
  helpMenu: {
    menu: '[data-cy=help-menu]',
    aboutButton: '[data-cy=about-button]',
    aboutDialog: '[data-cy=about-dialog]',
    aboutDialogCloseButton: '[data-cy=about-dialog-close-button]',
    support: '[data-cy=support-link]',
    documentation: '[data-cy=documentation-link]',
    technicalInfoButton: '[data-cy=technical-info-button]',
    technicalInfoDialog: '[data-cy=technical-info-dialog]',
    technicalInfoSolutionName: '[data-cy=technical-info-solution-name]',
    technicalInfoSolutionDescription: '[data-cy=technical-info-solution-description]',
    technicalInfoDialogCloseButton: '[data-cy=technical-info-dialog-close-button]',
  },
  instance: {
    tabName: '[data-cy="tabs.instance.key"]',
    cytovizContainer: '[data-cy="cytoviz-container"]',
    cytovizLoading: '[data-cy="cytoviz-loading-container"]',
    cytovizPlaceholder: '[data-cy="cytoviz-placeholder"]',
    cytovizCytoscapeScene: '[id="cytoviz-cytoscape-scene"]',
    cytovizOpenDrawerButton: '[data-cy="cytoviz-open-drawer-button"]',
    cytovizCloseDrawerButton: '[data-cy="cytoviz-close-drawer-button"]',
    cytovizDrawer: '[data-cy="cytoviz-drawer"]',
    cytovizDrawerDetailsTabButton: '[data-cy="cytoviz-drawer-details-tab-button"]',
    cytovizDrawerSettingsTabButton: '[data-cy="cytoviz-drawer-settings-tab-button"]',
    cytovizDrawerDetailsTabContent: '[data-cy="cytoviz-drawer-details-tab-content"]',
    cytovizDrawerSettingsTabContent: '[data-cy="cytoviz-drawer-settings-tab-content"]',
    cytovizLayoutSelector: '[data-cy="cytoviz-layout-selector"]',
    cytovizLayoutSelectOption: '[data-cy="cytoviz-layout-item-$LAYOUTNAME"]',
    cytovizCompactModeCheckbox: '[data-cy="cytoviz-compact-mode-checkbox"]',
    cytovizSpacingFactorSlider: '[data-cy="cytoviz-spacing-factor-slider"]',
    cytovizZoomLimitsSlider: '[data-cy="cytoviz-zoom-limits-slider"]',
    cytovizElementAttributeByName: '[data-cy="cytoviz-element-attribute-$ATTRIBUTENAME"]',
    cytovizElementAttributeName: '[data-cy="cytoviz-element-attribute-name"]',
    cytovizElementAttributeValue: '[data-cy="cytoviz-element-attribute-value"]',
  },
  dashboards: {
    tabName: '[data-cy="tabs.dashboards.key"]',
  },
  scenario: {
    view: '[data-cy=scenario-view]',
    tabName: '[data-cy="tabs.scenario.key"]',
    loadingSpinner: '[data-cy="scenario-loading-spinner"]',
    backdrop: '[data-cy=scenario-backdrop]',
    savingText: '[data-cy=scenario-backdrop-saving-text]',
    dashboard: {
      placeholder: '[data-cy=dashboard-placeholder]',
      accordion: '[data-cy=dashboards-accordion]',
      accordionSummary: '[data-cy=dashboards-accordion-summary]',
      accordionLogsDownloadButton: '[data-cy=successful-run-logs-download-button]',
      unsynced: '[data-unsynced=true]',
      synced: '[data-unsynced=false]',
    },
    selectInput: '[data-cy=scenario-select-input]',
    scenarioSelectOption: 'li[data-testid=option-$SCENARIOID]',
    parameters: {
      tabs: '[data-cy=scenario-parameters-tabs]',
      accordionSummary: '[data-cy=scenario-params-accordion-summary]',
      launchButton: '[data-cy=launch-scenario-button]',
      saveButton: '[data-cy=save-button]',
      discardButton: '[data-cy=discard-button]',
      dialogDiscardButton: '[data-cy=discard-changes-button2]',
      stopScenarioRunButton: '[data-cy=stop-scenario-run-button]',
      stopScenarioDialogButton1: '[data-cy=cancel-run-button1]',
      stopScenarioDialogButton2: '[data-cy=cancel-run-button2]',
      noParametersPlaceholder: '[data-cy=no-parameters-placeholder]',
      dialogDiscardAndContinueButton: '[data-cy=discard-and-continue-button2]',
      dialogDiscardAndContinueCancelButton: '[data-cy=discard-and-continue-button1]',
      loadingSpinner: '[data-cy=fetching-dynamic-parameter-spinner]',
      dynamicValueErrorIcon: '[data-cy=dynamic-value-error-icon]',
    },
    ownerName: '[data-cy=scenario-owner-name]',
    creationDate: '[data-cy=scenario-creation-date]',
    scenarioStatus: {
      created: '[data-cy=scenario-status-created]',
      running: '[data-cy=scenario-status-running]',
      successful: '[data-cy=scenario-status-successful]',
      failed: '[data-cy=scenario-status-failed]',
      unknown: '[data-cy=scenario-status-unknown]',
    },
    validationStatusLoadingSpinner: '[data-cy=scenario-validation-status-loading-spinner]',
    scenarioViewRedirect: '[data-cy=scenario-view-redirect]',
    validationStatusChip: '[data-cy=scenario-validation-status]',
    validationStatusChipDeleteIcon: 'svg',
    validateButton: '[data-cy=validate-scenario-button]',
    rejectButton: '[data-cy=reject-scenario-button]',
    runTemplateName: '[data-cy=run-template-name]',
    createButton: '[data-cy=create-scenario-button]',
    createDialog: {
      dialog: '[data-cy=create-scenario-dialog]',
      masterCheckbox: 'input[id=isScenarioMaster]',
      nameTextField: '[data-cy=create-scenario-dialog-name-textfield]',
      description: '[data-cy=text-input-new-scenario-description]',
      tags: '[id=new-scenario-tags]',
      errorLabel: '[id=scenarioName-helper-text]',
      datasetSelect: '[data-cy=create-scenario-dialog-dataset-select]',
      datasetSelectorOptions: '[data-cy=create-scenario-dialog-dataset-select-options]',
      typeSelect: '[data-cy=create-scenario-dialog-type-select]',
      typeSelectorOptions: '[data-cy=create-scenario-dialog-type-select-options]',
      submitButton: '[data-cy=create-scenario-dialog-submit-button]',
      cancelButton: '[data-cy=create-scenario-dialog-cancel-button]',
    },
    manager: {
      view: '[data-cy=scenario-manager-view]',
      tabName: '[data-cy="tabs.scenariomanager.key"]',
      confirmDeleteDialog: '[data-cy=confirm-scenario-delete-dialog]',
      search: '[data-cy=scenario-manager-search-field]',
      button: {
        delete: '[data-cy=scenario-delete-button]',
        renameScenario: '[data-cy=rename-scenario-button]',
      },
      scenarioAccordion: '[data-cy=scenario-accordion-$SCENARIOID]',
      scenarioAccordions: '[data-cy^=scenario-accordion-]',
      scenarioAccordionExpandButton: '[data-cy=expand-accordion-button]',
      scenarioRunTemplate: '[data-cy=scenario-run-template]',
      scenarioDataset: '[data-cy=scenario-datasets]',
      editableLabelInEditMode: '[data-cy=editable-label-in-edition-mode]',
      editableLink: '[data-cy=editable-link]',
      editableLinkInEditMode: '[data-cy=editable-link-in-edition-mode]',
    },
    description: {
      input: '[id=description-input]',
      disabled: '[data-cy=scenario-description-disabled]',
    },
    tags: {
      container: '[data-cy=tags-container]',
      tag: '[data-cy=scenario-tags-tag-$TAGINDEX]',
      add: '[data-cy=add-tag]',
      textfield: '[data-cy=new-tag-textfield]',
      cancelIcon: '[data-testid=CancelIcon]',
    },
  },
  workspace: {
    view: '[data-cy=workspaces-view]',
    workspaceCard: '[data-cy=resource-card-$WORKSPACEID]',
    openButton: 'Button',
    noWorkspacePlaceholder: '[data-cy=no-workspace-placeholder]',
    workspaceInfoAvatar: '[data-cy=workspace-info-avatar]',
    workspaceInfoPopover: '[data-cy=workspace-info-popover]',
    workspaceInfoName: '[data-cy=workspace-info-name]',
    workspaceInfoDescription: '[data-cy=workspace-info-description]',
    switchWorkspaceButton: '[data-cy=switch-workspace-button]',
  },
  datasetmanager: {
    createDatasetButton: '[data-cy=create-dataset-button]',
    createSubdatasetButton: '[data-cy=create-subdataset-button]',
    list: {
      container: '[data-cy=datasets-list]',
      deleteButtons: '[data-cy^=dataset-delete-button-]',
      deleteButtonByDatasetId: '[data-cy=dataset-delete-button-$DATASETID]',
      listItemButtons: '[data-cy^=datasets-list-item-button-]',
      listItemButtonByDatasetId: '[data-cy=datasets-list-item-button-$DATASETID]',
      listItemTextByDatasetId: '[data-cy=datasets-list-item-text-$DATASETID]',
      refreshButtonByDatasetId: '[data-cy=dataset-refresh-button-$DATASETID]',
      reuploadButtons: '[data-cy^=dataset-reupload-button-]',
      reuploadButtonByDatasetId: '[data-cy=dataset-reupload-button-$DATASETID]',
      reuploadInputs: '[id^=dataset-reupload-input-]',
      reuploadInputByDatasetId: '[data-cy=dataset-reupload-input-$DATASETID]',
      searchBar: '[data-cy="dataset-search-bar"]',
      refreshSpinners: '[data-cy^="refresh-spinner-"]',
      refreshSpinnerByDatasetId: '[data-cy="refresh-spinner-$DATASETID"]',
      refreshErrorIconByDatasetId: '[data-cy="refresh-error-icon-$DATASETID"]',
    },
    metadata: {
      card: '[data-cy=dataset-metadata-card]',
      author: '[data-cy=dataset-metadata-author]',
      creationDate: '[data-cy=dataset-metadata-creation-date]',
      refreshDate: '[data-cy=dataset-metadata-refresh-date]',
      sourceType: '[data-cy=dataset-metadata-source-type]',
      apiUrl: '[data-cy=dataset-metadata-api-url]',
      apiUrlButton: '[data-cy=dataset-metadata-copy-api-url-button]',
      editDescriptionButton: '[data-cy=edit-description]',
      descriptionTextField: '[data-cy=description-textfield]',
      description: '[data-cy=dataset-metadata-description]',
      parent: '[data-cy=dataset-metadata-parent]',
      newTagTextField: '[data-cy=new-tag-textfield]',
      addTagButton: '[data-cy=add-tag]',
      deleteTagButton: '[data-testid=CancelIcon]',
      tagsContainer: '[data-cy=tags-container]',
      tags: '[data-cy^=dataset-tags-tag-]',
      tagByIndex: '[data-cy=dataset-tags-tag-$INDEX]',
    },
    noDatasetsPlaceholder: '[data-cy=no-datasets-placeholder]',
    noDatasetsUserSubtitle: '[data-cy=no-datasets-user-subtitle]',
    noDatasetsViewerSubtitle: '[data-cy=no-datasets-viewer-subtitle]',
    tabName: '[data-cy="tabs.datasetmanager.key"]',
    view: '[data-cy=dataset-manager-view]',
    wizard: {
      dialog: '[data-cy=dataset-creation-dialog]',
      parentNameSubtitle: '[data-cy=wizard-subtitle-parent-dataset-name]',
      cancelDatasetCreation: '[data-cy=cancel-dataset-creation]',
      confirmDatasetCreation: '[data-cy=confirm-dataset-creation]',
      description: '[data-cy=text-input-new-dataset-description]',
      name: '[data-cy=text-input-new-dataset-title]',
      tagsContainer: '[data-cy="new-dataset-tags-container"]',
      tagsInput: '[id=new-dataset-tags]',
      tagByIndex: '[data-cy=new-dataset-tags-tag-$INDEX]',
      deleteTagButton: '[data-testid=CancelIcon]',
      locationOptionExistingData: '[data-cy=radio-button-existingData]',
      locationOptionFromScratch: '[data-cy=radio-button-fromScratch]',
      sourceTypeSelect: '[data-cy="enum-input-select-new-dataset-sourceType"]',
      sourceTypeOptionsMenu: '[data-cy="enum-input-menu-new-dataset-sourceType"]',
      sourceTypeOptions: 'li[role="option"]',
      sourceTypeOption: '[data-cy="$RUN_TEMPLATE_ID"]',
      sourceTypeOptionAzureStorage: '[data-cy="AzureStorage"]',
      sourceTypeOptionFile: '[data-cy="File"]',
      sourceTypeOptionADT: '[data-cy="ADT"]',
      azureStorageAccountName: '[data-cy="text-input-name"]',
      azureStorageContainerName: '[data-cy="text-input-location"]',
      azureStoragePath: '[data-cy="text-input-path"]',
      adtURL: '[data-cy="text-input-location"]',
      next: '[data-cy=dataset-creation-next-step]',
      previous: '[data-cy=dataset-creation-previous-step]',
    },
    delete: {
      dialog: '[data-cy=delete-dataset-dialog]',
      dialogBody: '[data-cy=delete-dataset-dialog-body]',
      cancelButton: '[data-cy=delete-dataset-button1]',
      confirmButton: '[data-cy=delete-dataset-button2]',
    },
    overview: {
      datasetName: '[data-cy=dataset-name]',
      placeholder: {
        container: '[data-cy=dataset-overview-placeholder]',
        title: '[data-cy=dataset-overview-title]',
        retryButton: '[data-cy=dataset-overview-retry-button]',
        rollbackButton: '[data-cy=dataset-overview-rollback-button]',
        apiLink: '[data-cy=dataset-overview-api-link]',
        runnerRunLogsDownloadButton: '[data-cy=runner-run-logs-download-button]',
      },
      indicators: {
        cardByKpiId: '[data-cy=indicator-card-$KPI_ID]',
        kpiLoading: '[data-cy=kpi-loading]',
        kpiValue: '[data-cy=kpi-value]',
        kpiLabel: '[data-cy=indicator-card-kpi-label]',
        kpiError: '[data-cy=kpi-error]',
        kpiUnknownState: '[data-cy=kpi-unknown-state]',
      },
      categories: {
        accordionSummary: '[data-cy=category-accordion-summary-$CATEGORY_ID]',
        accordionDetails: '[data-cy=category-accordion-details-$CATEGORY_ID]',
        kpi: '[data-cy=category-kpi-$KPI_ID]',
        kpiLabel: '[data-cy=category-kpi-label]',
        name: '[data-cy=category-name]',
        type: '[data-cy=category-type]',
        description: '[data-cy=category-description]',
        attributes: '[data-cy=category-attributes]',
        detailsDialog: '[data-cy=category-details-dialog]',
        detailsDialogOpenButton: '[data-cy=category-details-dialog-open-button]',
        detailsDialogCloseButton: '[data-cy=category-details-dialog-close-button]',
        detailsDialogDatasetName: '[data-cy=category-details-dialog-dataset-name]',
        detailsDialogCategoryName: '[data-cy=category-details-dialog-category-name]',
      },
    },
    confirmRefreshButton: '[data-cy=refresh-dataset-dialog-confirm-button]',
  },
  genericComponents: {
    uploadFile: {
      browseButton: '[data-cy=browse-button]',
      browseButtonInput: 'input[type=file]',
      downloadButton: '[data-cy=download-button]',
      deleteButton: '[data-cy=delete-button]',
      fileName: '[data-cy=file-name]',
      errorMessage: '[data-cy=file-error-message]',
    },
    table: {
      label: '[data-cy=label]',
      grid: '[data-cy=grid]',
      errorsPanel: '[data-cy=errors-panel]',
      errorsHeader: '[data-cy=errors-header]',
      errorAccordions: '[data-cy^=error-accordion-]',
      errorAccordionByIndex: '[data-cy=error-accordion-$ERRORINDEX]',
      errorSummary: '[data-cy=error-summary]',
      errorLoc: '[data-cy=error-loc]',
      importButton: '[data-cy=import-file-button]',
      importButtonInput: 'input[type=file]',
      export: {
        cancelButton: '[data-cy=table-export-file-cancel-button]',
        confirmButton: '[data-cy=table-export-file-confirm-button]',
        dialog: '[data-cy=table-export-dialog]',
        fileNameInput: '[data-cy=table-export-file-name-input]',
        openDialogButton: '[data-cy=export-button]',
        fileTypeSelect: '[data-cy=table-export-file-type-select]',
        fileTypeSelectContainer: '[data-cy=table-export-file-type-container]',
        fileTypeSelectOptionByExtension: '[data-cy=table-export-file-type-select-option-$EXTENSION]',
      },
      toolbar: {
        fullscreenButton: '[data-cy=grid-fullscreen-button]',
        addRowButton: '[data-cy=add-row-button]',
        deleteRowsButton: '[data-cy=delete-rows-button]',
        deleteRowsDialogConfirmButton: '[data-cy=delete-rows-dialog-confirm-button]',
        revertButton: '[data-cy=revert-table-button]',
        revertDialogConfirmButton: '[data-cy=revert-table-data-dialog-confirm-button]',
      },
      header: '[class=ag-header-container]',
      placeholder: '[data-cy=empty-table-placeholder]',
      columnGroupRow: '.ag-header-row-column-group',
      closeColumnGroupIcon: '.ag-header-expand-icon-expanded',
      openColumnGroupIcon: '.ag-header-expand-icon-collapsed',
      columnGroup: '[aria-colindex=$COLGROUPNAME]',
      colByName: '[col-id=$COLNAME]',
      rowsContainer: '[class=ag-center-cols-container]',
      row: '.ag-row',
      rowByIndex: '[row-index="$ROWINDEX"]',
      fullscreenTable: '[data-cy=fullscreen-table]',
    },
    basicInput: {
      disabledInputLabel: '[data-cy=disabled-input-label]',
      disabledInputValue: '[data-cy=disabled-input-value]',
      input: 'input',
    },
    basicEnumInput: {
      input: 'input',
      textField: '[data-cy=text_field]',
    },
    basicRadioInput: {
      radioButtonByKey: '[data-cy=radio-button-$KEY]',
      input: 'input',
      textField: '[data-cy=text-field]',
    },
    basicTextInput: {
      input: 'input',
    },
    basicNumberInput: {
      input: 'input',
    },
    basicSliderInput: {
      input: 'input',
      root: '[data-cy=slider-input]',
      slider: '[class*=MuiSlider-root]',
    },
    basicDateInput: {
      input: 'input',
    },
    errorBanner: {
      banner: '[data-cy=error-banner]',
      errorDetail: '[data-cy=error-detail]',
      errorComment: '[data-cy=error-comment]',
      dismissErrorButton: '[data-cy=dismiss-error-button]',
    },
    hierarchicalComboBox: {
      selector: '[data-cy=scenario-selector]',
      selectorOptions: '[data-cy=scenario-selector-options]',
    },
    rolesEdition: {
      shareScenarioButton: '[data-cy=share-scenario-button]',
      shareButton: '[data-cy=share-scenario-button]',
      shareScenarioDialogAgentsSelect: '[data-cy=share-scenario-dialog-agents-select]',
      shareDialogAgentsSelect: '[data-cy=share-scenario-dialog-agents-select]',
      shareScenarioDialogAgentsSelectAgentName: '[data-cy=share-scenario-dialog-agents-select-$AGENT_NAME]',
      shareDialogAgentsSelectAgentName: '[data-cy=share-scenario-dialog-agents-select-$AGENT_NAME]',
      shareScenarioDialogFirstCancelButton: '[data-cy=share-scenario-dialog-first-cancel-button]',
      shareDialogFirstCancelButton: '[data-cy=share-scenario-dialog-first-cancel-button]',
      shareScenarioDialogSubmitButton: '[data-cy=share-scenario-dialog-submit-button]',
      shareDialogSubmitButton: '[data-cy=share-scenario-dialog-submit-button]',
      shareScenarioDialog: '[data-cy=share-scenario-dialog]',
      shareDialog: '[data-cy=share-scenario-dialog]',
      shareScenarioDialogTitle: '[data-cy=share-scenario-dialog-title]',
      shareDialogTitle: '[data-cy=share-scenario-dialog-title]',
      shareScenarioDialogDisabledAgentsSelect: '[data-cy=share-scenario-dialog-disabled-agents-select]',
      shareDialogDisabledAgentsSelect: '[data-cy=share-scenario-dialog-disabled-agents-select]',
      shareScenarioDialogRolesCheckboxByRole: '[data-cy=share-scenario-dialog-roles-checkbox-$ROLE]',
      shareDialogRolesCheckboxByRole: '[data-cy=share-scenario-dialog-roles-checkbox-$ROLE]',
      shareScenarioDialogGrantedPermissionChipByPermission:
        '[data-cy=share-scenario-dialog-granted-permission-chip-$PERMISSION]',
      shareDialogGrantedPermissionChipByPermission:
        '[data-cy=share-scenario-dialog-granted-permission-chip-$PERMISSION]',
      shareScenarioDialogNotGrantedPermissionChipByPermission:
        '[data-cy=share-scenario-dialog-not-granted-permission-chip-$PERMISSION]',
      shareDialogNotGrantedPermissionChipByPermission:
        '[data-cy=share-scenario-dialog-not-granted-permission-chip-$PERMISSION]',
      shareScenarioDialogSecondCancelButton: '[data-cy=share-scenario-dialog-second-cancel-button]',
      shareDialogSecondCancelButton: '[data-cy=share-scenario-dialog-second-cancel-button]',
      shareScenarioDialogConfirmAddAccessButton: '[data-cy=share-scenario-dialog-confirm-add-access-button]',
      shareDialogConfirmAddAccessButton: '[data-cy=share-scenario-dialog-confirm-add-access-button]',
      roleEditorByAgent: '[data-cy=role-editor-$AGENT_NAME]',
      roleEditorAgentName: '[data-cy=role-editor-agent-name]',
      selectWithAction: '[data-cy=select-with-action]',
      selectCheckedIconByOption: '[data-cy=select-$OPTION-checked-icon]',
      selectOption: '[data-cy=select-option-$OPTION]',
      selectActionName: '[data-cy=select-action-name]',
      noAdminErrorMessage: '[data-cy=no-admin-error-message]',
    },
  },
};