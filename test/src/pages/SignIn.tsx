import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);

  const onSubmit = useCallback(() => {
    Alert.alert('로그인', '로그인되었습니다');
  }, []);

  return (
    <View>
      <View>
        <Text>이메일</Text>
        <TextInput
          placeholder="이메일을 입력해주세요"
          onChangeText={onChangeEmail}
        />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력해주세요"
          onChangeText={onChangePassword}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !email || !password ? styles.loginButton : styles.loginButtonActive
          }
          disabled={!email || !password}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>

        <Pressable>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
  },
  buttonZone: {
    alignItems: 'center',
  },
});

export default SignIn;
