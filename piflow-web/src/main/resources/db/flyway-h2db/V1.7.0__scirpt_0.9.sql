CREATE TABLE IF NOT EXISTS `TEST_DATA` (
  `ID` VARCHAR(40) PRIMARY KEY NOT NULL,
  `CRT_DTTM` DATETIME NOT NULL COMMENT 'Create date time',
  `CRT_USER` VARCHAR(255) NOT NULL COMMENT 'Create user',
  `ENABLE_FLAG` BIT NOT NULL COMMENT 'Enable flag',
  `LAST_UPDATE_DTTM` DATETIME NOT NULL COMMENT 'Last update date time',
  `LAST_UPDATE_USER` VARCHAR(255) NOT NULL COMMENT 'Last update user',
  `VERSION` BIGINT NULL DEFAULT NULL COMMENT 'Version',
  `NAME` VARCHAR(1000) COMMENT 'name',
  `DESCRIPTION` TEXT COMMENT 'description'
);

CREATE TABLE IF NOT EXISTS `TEST_DATA_SCHEMA` (
  `ID` VARCHAR(40) PRIMARY KEY NOT NULL,
  `CRT_DTTM` DATETIME NOT NULL COMMENT 'Create date time',
  `CRT_USER` VARCHAR(255) NOT NULL COMMENT 'Create user',
  `ENABLE_FLAG` BIT NOT NULL COMMENT 'Enable flag',
  `LAST_UPDATE_DTTM` DATETIME NOT NULL COMMENT 'Last update date time',
  `LAST_UPDATE_USER` VARCHAR(255) NOT NULL COMMENT 'Last update user',
  `VERSION` BIGINT NULL DEFAULT NULL COMMENT 'Version',
  `FK_TEST_DATA_ID` VARCHAR(40) COMMENT 'fk test_data id',
  `FIELD_NAME` VARCHAR(1000) COMMENT 'field_name',
  `FIELD_TYPE` VARCHAR(1000) COMMENT 'field_type',
  `FIELD_DESCRIPTION` TEXT COMMENT 'description',
  `FIELD_SOFT` BIGINT COMMENT 'soft',
);
ALTER TABLE `TEST_DATA_SCHEMA` ADD CONSTRAINT `FK22rp96r4290eons0000000001` FOREIGN KEY (`FK_TEST_DATA_ID`) REFERENCES `TEST_DATA` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE IF NOT EXISTS `TEST_DATA_SCHEMA_VALUES` (
  `ID` VARCHAR(40) PRIMARY KEY NOT NULL,
  `CRT_DTTM` DATETIME NOT NULL COMMENT 'Create date time',
  `CRT_USER` VARCHAR(255) NOT NULL COMMENT 'Create user',
  `ENABLE_FLAG` BIT NOT NULL COMMENT 'Enable flag',
  `LAST_UPDATE_DTTM` DATETIME NOT NULL COMMENT 'Last update date time',
  `LAST_UPDATE_USER` VARCHAR(255) NOT NULL COMMENT 'Last update user',
  `VERSION` BIGINT NULL DEFAULT NULL COMMENT 'Version',
  `FK_TEST_DATA_ID` VARCHAR(40) COMMENT 'fk test_data id',
  `FK_TEST_DATA_SCHEMA_ID` VARCHAR(40) COMMENT 'fk test_data_schema id',
  `FIELD_VALUE` VARCHAR(1000) COMMENT 'field type',
  `DATA_ROW` BIGINT COMMENT 'data row'
);
ALTER TABLE `TEST_DATA_SCHEMA_VALUES` ADD CONSTRAINT `FK33rp96r4290eons0000000001` FOREIGN KEY (`FK_TEST_DATA_ID`) REFERENCES `TEST_DATA` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `TEST_DATA_SCHEMA_VALUES` ADD CONSTRAINT `FK33rp96r4290eons0000000002` FOREIGN KEY (`FK_TEST_DATA_SCHEMA_ID`) REFERENCES `TEST_DATA_SCHEMA` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE IF NOT EXISTS `FLOW_STOPS_TEMPLATE_MANAGE` (
  `ID` VARCHAR(40) PRIMARY KEY NOT NULL,
  `CRT_DTTM` DATETIME NOT NULL COMMENT 'Create date time',
  `CRT_USER` VARCHAR(255) NOT NULL COMMENT 'Create user',
  `ENABLE_FLAG` BIT NOT NULL COMMENT 'Enable flag',
  `LAST_UPDATE_DTTM` DATETIME NOT NULL COMMENT 'Last update date time',
  `LAST_UPDATE_USER` VARCHAR(255) NOT NULL COMMENT 'Last update user',
  `VERSION` BIGINT NULL DEFAULT NULL COMMENT 'Version',
  `BUNDLE` VARCHAR(255) COMMENT 'bundle',
  `STOPS_GROUPS` VARCHAR(255) COMMENT 'groups name',
  `IS_SHOW` BIT COMMENT 'is show'
);
