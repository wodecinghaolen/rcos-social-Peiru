import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-2_ECNTeh5Dk',
    ClientId: '6lvt4uq6katkg11hu0ivinv2fk',
};

export default new CognitoUserPool(poolData);
