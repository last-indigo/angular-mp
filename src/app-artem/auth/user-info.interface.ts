export class UserInfoInterface {
  public id: number;
  public fakeToken: string;
  public name: {
    first: string;
    last: string;
  };
  public login: string;
  public password: string;
}
