<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreQDDiemSoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'idMG' => 'required',
            'DiemThang' => 'required',
            'DiemHoa' => 'required',
            'DiemThua' => 'required'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi thêm dữ liệu',
            'detail' => $validator->errors()->first()
        ]));
    }

    public function messages()
    {
        return [
            'idMG.required' => 'Mùa giải không được bỏ trống!',
            
            'DiemThang.required' => 'Điểm quy định trận thắng không được bỏ trống!',

            'DiemHoa.required' => 'Điểm quy định trận hoà không được bỏ trống!',

            'DiemThua.required' => 'Điểm quy định trận thua không được bỏ trống!',
        ];
    }
}