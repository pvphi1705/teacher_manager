/* eslint-disable simple-import-sort/imports */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
  Image,
} from 'react-native';
import {metrics, colors, images} from 'src/themes';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

interface SelectProps {
  name?: string;
  value?: string;
  containerStyle?: ViewStyle;
  menuStyle?: ViewStyle;
  triggerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  textMenuStyle?: TextStyle;
  options: Array<SelectOption>;
  onSelect: (value: SelectOption) => void;
  label?: string;
  disabled?: boolean;
  width?: number;
  leftIcon?: Element;
  hideLeft?: boolean;
  hideRight?: boolean;
  hideImageLeft?: boolean;
  iconName?: string;
  colorLeft?: string;
  colorRight?: string;
  action?: boolean;
  labelAction?: string;
  onSelectAction?: () => void;
  iconRight?: string;
  showSub?: boolean;
  showSub1?: boolean;
  onOpen?: () => void;
  whereToShow?: string;
}

export interface SelectOption {
  id?: number;
  name?: string;
}

const Select = (props: SelectProps) => {
  const [select, setSelect] = useState<string>('');

  useEffect(() => {
    setSelect(props?.label!);
  }, [props]);

  const onSelect = useCallback(
    (value: SelectOption) => {
      setSelect(value.name || props?.label! || '');
      if (props.onSelect) {
        props.onSelect(value);
      }
    },
    [props],
  );

  const renderMenuTrigger = useMemo(() => {
    const customStyles = {
      triggerOuterWrapper: styles.triggerOuterWrapper,
      TriggerTouchableComponent: TouchableOpacity,
      triggerWrapper: [styles.triggerWrapper, props.triggerStyle],
    };

    return (
      <MenuTrigger customStyles={customStyles} disabled={props.disabled}>
        <View style={{flexDirection: 'row'}}>
          <Text numberOfLines={1} style={[styles.label, props.labelStyle]}>
            {select}
          </Text>
          {!props.hideRight && (
            <Image source={images.icArrowDown} style={styles.image} />
          )}
        </View>
      </MenuTrigger>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.triggerStyle,
    props.disabled,
    props.leftIcon,
    props.hideLeft,
    props.colorLeft,
    props.labelStyle,
    props.hideRight,
    props.colorRight,
    props.iconRight,
    select,
  ]);

  const renderItemMenu = useCallback(() => {
    return (
      <ScrollView showsVerticalScrollIndicator={true}>
        {props.options &&
          props.options.map((option, index) => (
            <MenuOption
              value={option.name}
              key={`${index}`}
              onSelect={() => onSelect(option)}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, props.textMenuStyle]}>
                  {option.name}
                </Text>
              </View>
            </MenuOption>
          ))}
        {props.action && (
          <MenuOption
            value={props.labelAction}
            key={props.labelAction}
            onSelect={props.onSelectAction}>
            <Text style={styles.options}>{props.labelAction}</Text>
          </MenuOption>
        )}
      </ScrollView>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    onSelect,
    props.colorLeft,
    props.hideImageLeft,
    props.options,
    props.whereToShow,
  ]);

  const renderMenuOption = useMemo(() => {
    const customStyles = {
      optionsContainer: [styles.optionsContainer, props.menuStyle],
      optionWrapper: styles.optionWrapper,
    };

    return (
      <MenuOptions customStyles={customStyles}>{renderItemMenu()}</MenuOptions>
    );
  }, [props.menuStyle, renderItemMenu]);

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Menu
        renderer={renderers.Popover}
        rendererProps={{
          preferredPlacement: 'bottom',
          placement: props.whereToShow,
        }}
        onOpen={props.onOpen}>
        {renderMenuTrigger}
        {renderMenuOption}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  optionsContainer: {
    width: metrics.screenWidth * 0.3,
    height: metrics.screenHeight,
  },
  optionWrapper: {
    paddingHorizontal: metrics.space.s10,
    paddingVertical: 0,
  },
  triggerOuterWrapper: {
    alignSelf: 'baseline',
  },
  triggerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.opacityBlack,
    width: metrics.screenWidth * 0.38,
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
    color: colors.textColor,
    flex: 1,
  },
  sub: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.textColor,
  },
  sub1: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textColor,
  },
  options: {
    textAlign: 'left',
    color: '#ED1C24',
    fontSize: 12,
    paddingVertical: metrics.space.s6,
  },
  labelContainer: {
    // flexDirection: "row",
    borderBottomColor: colors.gray_C4,
    borderBottomWidth: 1,
    paddingVertical: metrics.space.s10,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
// import {View, Text} from 'react-native';
// import React from 'react';

// const Select = () => (
//   <View>
//     <Text>Hello world!</Text>
//     <Menu>
//       <MenuTrigger text="Select action" />
//       <MenuOptions>
//         <MenuOption onSelect={() => {}} text="Save" />
//         <MenuOption onSelect={() => {}}>
//           <Text style={{color: 'red'}}>Delete</Text>
//         </MenuOption>
//         <MenuOption onSelect={() => {}} disabled={true} text="Disabled" />
//       </MenuOptions>
//     </Menu>
//   </View>
// );
export default Select;
