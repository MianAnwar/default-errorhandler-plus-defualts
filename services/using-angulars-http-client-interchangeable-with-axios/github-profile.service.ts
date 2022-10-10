import { Observable } from 'rxjs';
import { BaseHttpClientService } from './base-http-client.service';
import { HttpClientService } from './base-http-client-axios.service';

export interface IProfileDto {
  login: string;
  id: string;
  avatar_url: string;
  created_at: string;
  blog: string;
  location: string;
}

export class ProfileService {
  constructor(private http: HttpClientService) {}

  getGitHubProfile(url: string): Observable<IProfileDto> {
    return this.http.get<IProfileDto>(url);
  }
}
