<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UpdateXuPhatRequest extends FormRequest
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
            'idKQ' => 'required|max:10',
            'idCT' => 'required|max:10',
            'LoaiThe' => 'required|max:45',
            'ThoiDiem' => 'required|max:11',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi thêm dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'idKQ.required' => 'ID kết quả không được bỏ trống!',
            'idCT.required' => 'ID cầu thủ không được bỏ trống!',
            'LoaiThe.required' => 'Loại thẻ không được bỏ trống!',
            'ThoiDiem.required' => 'Thời điểm xử phạt không được bỏ trống!',
        ];
    }
}
